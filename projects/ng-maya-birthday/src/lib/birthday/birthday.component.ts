import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { KinamNahual } from 'nahual-date';

@Component({
  selector: 'kinam-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BirthdayComponent implements OnInit {
  public dateCtrl: FormControl;
  @Input() kinamDate = new KinamNahual(new Date());

  public ngOnInit() {
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleDateChange(event) {
    const { value } = event.target;
    this.kinamDate = new KinamNahual(value);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }

  public handleInputEvent(event) {
    const { value } = event.target;
    this.kinamDate = new KinamNahual(value);
    this.dateCtrl = new FormControl(this.kinamDate.date);
  }
}
