import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { KinamNahual, fromNumbers } from 'nahual-date';



@Component({
  selector: 'kinam-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BirthdayComponent implements OnInit {
  public date1ctrl: FormControl;
  public date2ctrl: FormControl;
  public date3ctrl: FormControl;
  public date4ctrl: FormControl;

  public date1 = fromNumbers(18, 8, 1992);
  public date2 = fromNumbers(19, 8, 1992);
  public date3 = fromNumbers(20, 8, 1992);
  public date4 = fromNumbers(21, 8, 1992);

  public ngOnInit() {
    this.date1ctrl = new FormControl(this.date1.date);
    this.date2ctrl = new FormControl(this.date2.date);
    this.date3ctrl = new FormControl(this.date3.date);
    this.date4ctrl = new FormControl(this.date4.date);
  }

  public handleDateChange(event) {
    const date = event.value;
    // this.kinamDate = new KinamNahual(date);
    // this.date = new FormControl(this.kinamDate.date);
  }

  public handleInputEvent(event) {
    const date = event.target.value;
    // this.kinamDate = new KinamNahual(date);
    // this.date = new FormControl(this.kinamDate.date);
  }
}
