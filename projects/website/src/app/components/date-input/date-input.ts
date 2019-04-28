import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { moment } from 'ng-maya-birthday';
import { Moment } from 'moment';

@Component({
  selector: 'kinam-date',
  template: `
    <div class="container">
      <div class="btn-container" (click)="toggle()">
        <i class="fal" [ngClass]="open ? 'fa-minus' : 'fa-plus'"></i>
      </div>
      <div style="position: relative; width: 20rem">
        <div class="date" [class.date-invisible]="open">
          <div
            *ngIf="
              form.get('day').value &&
                form.get('month').value &&
                form.get('year').value;
              else noBd
            "
          >
            {{ form.get('day').value }}.{{ form.get('month').value }}.{{
              form.get('year').value
            }}
          </div>
        </div>
        <form
          class="outer"
          action=""
          [formGroup]="form"
          [class.closed]="!open"
          (submit)="toggle()"
        >
          <input
            type="number"
            min="1"
            max="31"
            placeholder="1"
            formControlName="day"
          />

          <input
            type="number"
            min="1"
            max="12"
            placeholder="7"
            formControlName="month"
          />

          <input
            type="number"
            min="1900"
            max="2099"
            placeholder="1992"
            formControlName="year"
          />
          <button type="submit" hidden></button>
        </form>
      </div>
    </div>
    <ng-template #noBd>
      <span (click)="toggle()" class="enter-label">Enter your Birthday</span>
      <ng-template> </ng-template
    ></ng-template>
  `,
  styleUrls: ['./date-input.scss']
})
export class DateInputComponent {
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

  toggle() {
    this.open = !this.open;
  }
}
