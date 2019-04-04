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
  public dateCtrl: FormControl;
  public kinamDate = fromNumbers(18, 8, 1992);

  public ngOnInit() {
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleDateChange(event) {
    const date = event.value;
    this.kinamDate = new KinamNahual(date);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleInputEvent(event) {
    const date = event.target.value;
    this.kinamDate = new KinamNahual(date);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }
}
