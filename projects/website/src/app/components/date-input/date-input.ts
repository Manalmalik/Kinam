import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { moment } from 'ng-maya-birthday';
import { Moment } from 'moment';
import { animate, style, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'kinam-date',
  templateUrl: './date-input.html',
  styleUrls: ['./date-input.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {
  constructor(private _builder: AnimationBuilder) {}
  public open = false;
  public form = new FormGroup({
    day: new FormControl(null, Validators.required),
    month: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required)
  });

  public dateChange = new EventEmitter<Moment>();

  submit() {
    if (this.form.value) {
      const { day, month, year } = this.form.value;
      if (day && month && year) {
        const date = moment(new Date(`${year}/${month}/${day}`));
        this.dateChange.emit(date);
      }
    }
  }

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

  toggle(el: ElementRef, el2: ElementRef) {
    this.open = !this.open;
    const player = this.animFactory(!this.open ? 1 : -1, this.open).create(el);
    const player2 = this.animFactory(this.open ? 1 : -1, !this.open).create(
      el2
    );
    player.play();
    player2.play();
  }
}
