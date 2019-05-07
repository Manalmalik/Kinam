import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { trigger, transition, style, animate, group } from '@angular/animations';

import { BehaviorSubject, of, Observable } from 'rxjs';

import { KinamNahual, kinamNahual } from 'nahual-date';
import { LocalStorageService } from 'core';

import { DateFormat } from './date-format';
import { moment } from './moment';
import { tap, switchMap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

const YEAR_MAX = 2099;
const YEAR_MIN = 1900;

const validators = {
  year: [
    Validators.required,
    Validators.min(YEAR_MIN),
    Validators.max(YEAR_MAX)
  ],
  month: [
    Validators.required,
    Validators.min(1),
    Validators.max(12)
  ],
  day: [
    Validators.required,
    Validators.min(1),
    Validators.max(31)
  ]
};

@Component({
  selector: 'kinam-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: DateFormat }
  ],
  animations: [
    trigger('calc', [
      transition(':enter', [
        style({ transform: 'translateX(15%)', opacity: 1 }),
        animate(200)
      ]),
      transition(':leave', [
        group([
          animate('0.2s', style({ transform: 'translateX(-15%)' })),
          animate('0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class BirthdayComponent implements OnInit {
  public date = new Date();

  @Input() public content$: Observable<any>;

  public kinamDate: KinamNahual;
  public dateCtrl: FormControl;
  public loading$ = new BehaviorSubject(false);


  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  public dateConfig: {
    min: Date;
    today: Date;
    startView: 'multi-year' | 'year';
    touchUi: boolean;
  };

  public form: FormGroup;

  public maxDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  public ngOnInit() {
    const lastDate = localStorage.getItem('birthday');

    const today = new Date();
    if (!lastDate) {
      this.form = new FormGroup({
        day: new FormControl(today.getDate(), validators.day),
        month: new FormControl(today.getMonth() + 1, validators.month),
        year: new FormControl(today.getFullYear(), validators.year)
      });
      this.kinamDate = kinamNahual(today);
    } else {
      const timestamp = new Date(lastDate);
      this.form = new FormGroup({
        day: new FormControl(timestamp.getDate(), validators.day),
        month: new FormControl(timestamp.getMonth() + 1, validators.month),
        year: new FormControl(timestamp.getFullYear(), validators.year)
      });
      this.kinamDate = kinamNahual(timestamp);
    }

    this.form.valueChanges.pipe(
      distinctUntilChanged(),
      switchMap(x => of(x)),
      tap(() => this.loading$.next(true)),
      debounceTime(1000),
      filter(
        ({ day, month, year }) => {
          const x = !(
            !isNaN(day) &&
            !isNaN(month) &&
            !isNaN(year) &&
            !!day &&
            !!month &&
            !!year &&
            year <= YEAR_MAX &&
            year >= YEAR_MIN
          );
          if (x === false) {
            return true;
          }
          return false;
        }
      )
    ).subscribe(({ day, month, year }) => {
      let date = moment(new Date(`${year}/${month}/${day}`));
      date = date.add(12, 'hours');
      this.localStorageService.set('birthday', date.toString());
      this.kinamDate.update(date.toDate());
      this.loading$.next(false);
    });
  }
}
