import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { KinamNahual, fromNumbers } from 'nahual-date';

const kinam = fromNumbers(18, 8, 1992);

@Component({
  selector: 'kinam-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirthdayComponent implements OnInit {
  public date: FormControl;
  public kinamDate = kinam;

  public ngOnInit() {
    this.kinamDate = fromNumbers(18, 8, 1992);
    this.date = new FormControl(this.kinamDate.date);
  }

  public handleDateChange(event) {
    const date = event.value;
    this.kinamDate = new KinamNahual(date);
    this.date = new FormControl(this.kinamDate.date);
  }

  public handleInputEvent(event) {
    const date = event.target.value;
    this.kinamDate = new KinamNahual(date);
    this.date = new FormControl(this.kinamDate.date);
  }
}
