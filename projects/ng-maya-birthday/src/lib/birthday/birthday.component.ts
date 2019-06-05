import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { trigger, transition, style, animate, group } from '@angular/animations';

import { BehaviorSubject, of, Observable } from 'rxjs';
import { tap, switchMap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';

import { KinamNahual, kinamNahual } from 'nahual-date';
import { LocalStorageService } from 'core';

import { DateFormat } from './date-format';
import { moment } from './moment';

export const YEAR_MAX = 2099;
export const YEAR_MIN = 1900;

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

  constructor(
    private localStorageService: LocalStorageService,
    private cd: ChangeDetectorRef
  ) { }


  @Input() public content$: Observable<any> = of({
    calculating: 'Traversing the stars...',
    your_nahual: 'Your Nawal',
    your_daysign: 'Your Spirit Guardian',
    your_nahual_number: 'Your Energy Number',
  });

  public get focussed() {
    return this._focussed;
  }
  public date = new Date();
  public kinamDate: KinamNahual;
  public dateCtrl: FormControl;
  public loading$: BehaviorSubject<boolean>;
  public form: FormGroup;
  public maxDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  private _focussed: 'day' | 'month' | 'year';

  public ngOnInit() {
    const lastDate = localStorage.getItem('birthday');

    const today = new Date();
    if (!lastDate) {
      this.form = new FormGroup({
        day: new FormControl(today.getDate()),
        month: new FormControl(today.getMonth() + 1),
        year: new FormControl(today.getFullYear())
      });
      this.kinamDate = kinamNahual(today);
    } else {
      const timestamp = new Date(lastDate);
      this.form = new FormGroup({
        day: new FormControl(timestamp.getDate()),
        month: new FormControl(timestamp.getMonth() + 1),
        year: new FormControl(timestamp.getFullYear())
      });
      this.kinamDate = kinamNahual(timestamp);
    }

    this.form.valueChanges.pipe(
      distinctUntilChanged(),
      switchMap(value => of(value)),
      tap(() => {
        this.loading$ = new BehaviorSubject(true);
      }),
      debounceTime(3000),
      filter(
        ({ day, month, year }) => (
          !isNaN(day) &&
          !isNaN(month) &&
          !isNaN(year) &&
          !!day &&
          !!month &&
          !!year &&
          year <= YEAR_MAX &&
          year >= YEAR_MIN
        ),
      )
    ).subscribe(({ day, month, year }) => {
      const dayStr = day < 10 ? `0${day}` : day;
      const monthStr = month < 10 ? `0${month}` : month;
      const date = moment.utc(`${year}/${monthStr}/${dayStr}`);

      const offset = date.utcOffset();
      if (!date.isValid() || offset !== 0) {
        throw new Error('Date invalid!');
      }

      this.localStorageService.set('birthday', date.toString());
      this.kinamDate.update(date.toDate());
      this.loading$.next(false);
      this.cd.detectChanges();
    });


    this.form.patchValue({
      year: 2019,
    });
  }

  public setInit() {
    this.loading$.next(true);
  }

  public focus(focussed: 'day' | 'month' | 'year') {
    if (focussed && focussed !== this._focussed) {
      this._focussed = focussed;
    }
  }

  public blur() {
    this._focussed = null;
  }
}
