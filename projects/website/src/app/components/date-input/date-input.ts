import { animate, style, AnimationBuilder } from '@angular/animations';
import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { moment } from 'ng-maya-birthday';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { KinamNahual, kinamNahual } from 'nahual-date';
import { LocalStorageService, YEAR_MAX, YEAR_MIN } from 'core';
import { distinctUntilChanged, switchMap, tap, delay, filter } from 'rxjs/operators';

export const maxDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
  selector: 'kinam-date',
  templateUrl: './date-input.html',
  styleUrls: ['./date-input.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent implements OnInit {

  constructor(
    private _builder: AnimationBuilder,
    private localStorageService: LocalStorageService,
  ) { }

  public get focussed() {
    return this._focussed;
  }

  public date = new Date();
  public kinamDate: KinamNahual;
  public dateCtrl: FormControl;
  public loading$: BehaviorSubject<boolean>;
  public maxDates = maxDates;
  public open = false;
  public form = new FormGroup({
    day: new FormControl(null, Validators.required),
    month: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required)
  });

  private _focussed: 'day' | 'month' | 'year';


  @Output() public dateChange = new EventEmitter();
  @Input() public content$: Observable<any> = of({
    calculating: 'Traversing the stars...',
    your_nahual: 'Your Nawal',
    your_daysign: 'Your Spirit Guardian',
    your_nahual_number: 'Your Energy Number',
  });

  private animFactory(direction: number, open: boolean) {
    return this._builder.build([
      style({
        transform: `translateY(${open ? 0 : direction * 200}px)`,
        opacity: open ? '1' : '0'
      }),
      animate(
        '200ms cubic-bezier(0.17,0.43,0.75,0.97)',
        style({
          transform: `translateY(${!open ? 0 : direction * 200}px)`,
          opacity: !open ? '1' : '0'
        })
      )
    ]);
  }

  public setInit() {
    this.loading$.next(true);
  }

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
      switchMap(value => of(value)),
      tap(_ => this.loading$ = new BehaviorSubject(true)),
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
      ),
      filter(({ day, month }) => {
        return this.maxDates[month - 1] >= day;
      }),
      delay(150),
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
      this.dateChange.emit({ day, month, year });
    });


    this.form.patchValue({
      year: 2019,
    });
  }

  public focus(focussed: 'day' | 'month' | 'year') {
    if (focussed && focussed !== this._focussed) {
      this._focussed = focussed;
    }
  }

  public blur() {
    this._focussed = null;
  }


  toggle(el: ElementRef, el2: ElementRef) {
    this.open = !this.open;

    const player = this.animFactory(
      !this.open ? 1 : -1,
      this.open
    ).create(el);

    const player2 = this.animFactory(
      this.open ? 1 : -1,
      !this.open
    ).create(el2);

    player.play();
    player2.play();
  }
}
