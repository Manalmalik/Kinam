import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { MobileDetectService } from 'core';
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

  constructor(private mobileDetectService: MobileDetectService) {}

  public ngOnInit() {
    this.dateConfig = {
      min: new Date('1900-01-01'),
      today: new Date(),
      startView: 'multi-year',
      touchUi: this.mobileDetectService.isMobile
    };
    this.kinamDate = kinamNahual(this.dateConfig.today);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  private checkValue(value) {
    if (this.lastDate && this.lastDate.isSame(value.add(12, 'hours'))) {
      return;
    }

    value = value.add(12, 'hours');

    this.kinamDate = kinamNahual(value.toDate());
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleDateChange(input) {
    const { value } = input;
    const [day, month, year] = value.split('.');
    const date = moment(new Date(`${year}/${month}/${day}`));
    this.checkValue(date);
  }
}
