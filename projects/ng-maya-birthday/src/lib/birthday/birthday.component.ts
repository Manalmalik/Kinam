import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { KinamNahual, kinamNahual } from 'nahual-date';

import { DateFormat } from './date-format';

import { MobileDetectService } from 'core';
import { moment } from './moment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kinam-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  public isIOS: boolean;
  public loading$ = new BehaviorSubject(false);

  @ViewChild('iosPicker') iosPicker: ElementRef<HTMLInputElement>;

  public dateConfig: {
    min: Date;
    today: Date;
    startView: 'multi-year' | 'year';
    touchUi: boolean;
  };

  constructor(private mobileDetectService: MobileDetectService) {}

  public ngOnInit() {
    this.isIOS = this.mobileDetectService.isIOS;

    this.dateConfig = {
      min: new Date('1900-01-01'),
      today: new Date(),
      startView: 'multi-year',
      touchUi: this.mobileDetectService.isMobile
    };
    this.kinamDate = kinamNahual(this.dateConfig.today);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public openIOS(element: HTMLInputElement) {
    if (this.mobileDetectService.isIOS) {
      element.focus();
    }
  }

  private handleKeybordEvent(value) {
    const [day, month, year] = value.split('.');

    let date = moment(new Date(`${month}/${day}/${year}`));
    date = date.add(12, 'hours');

    this.kinamDate = kinamNahual(date.toDate());
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  private checkValue(value) {
    this.loading$.next(true);
    if (value) {
      if (value instanceof KeyboardEvent) {
        if (typeof value === 'string') {
          this.handleKeybordEvent(value);
        }
      } else {
        if (moment.isMoment(value)) {
          let date = value;
          date = date.add(12, 'hours');

          this.kinamDate = kinamNahual(date.toDate());
          this.dateCtrl = new FormControl(this.kinamDate.date);
        }
      }
    }
    this.loading$.next(false);
  }
  public handleDateChange(event) {
    const { value } = event.target;
    this.checkValue(value);
  }
}
