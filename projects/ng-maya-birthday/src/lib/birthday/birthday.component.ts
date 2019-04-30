import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { Moment } from 'moment';
import { BehaviorSubject } from 'rxjs';

import { KinamNahual, kinamNahual } from 'nahual-date';

import { DateFormat } from './date-format';
import { moment } from './moment';

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
  ]
})
export class BirthdayComponent implements OnInit {
  public date = new Date();

  public kinamDate: KinamNahual;
  public dateCtrl: FormControl;
  public loading$ = new BehaviorSubject(false);
  private lastDate: Moment;

  public dateConfig: {
    min: Date;
    today: Date;
    startView: 'multi-year' | 'year';
    touchUi: boolean;
  };

  public form: FormGroup;

  public maxDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  public ngOnInit() {
    const today = new Date();
    this.form = new FormGroup({
      day: new FormControl(today.getDate(), [
        Validators.required,
        Validators.min(1),
        Validators.max(31)
      ]),
      month: new FormControl(today.getMonth() + 1, [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
      ]),
      year: new FormControl(today.getFullYear(), [
        Validators.required,
        Validators.min(1900),
        Validators.max(2099)
      ])
    });

    this.kinamDate = kinamNahual(today);

    this.form.valueChanges.subscribe(({ day, month, year }) => {
      let date = moment(new Date(`${year}/${month}/${day}`));
      date = date.add(12, 'hours');
      if (this.lastDate && this.lastDate.isSame(date.add(12, 'hours'))) {
        return;
      }
      this.kinamDate.update(date.toDate());
    });
  }
}
