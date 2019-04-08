import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
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

 @Input() public date = fromNumbers(18, 8, 1992);

  public ngOnInit() {
    this.dateCtrl = new FormControl(this.date.date);
  }

  public handleDateChange(event) {
    const date = event.value;
    this.date = new KinamNahual(date);
    this.dateCtrl = new FormControl(this.date.date);
  }

  public handleInputEvent(event) {
    const date = event.target.value;    
    this.date = new KinamNahual(date);
    this.dateCtrl = new FormControl(this.date.date);
  }
}
