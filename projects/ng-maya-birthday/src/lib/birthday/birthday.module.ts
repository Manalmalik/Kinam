import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MayanNumberModule } from 'ng-maya-number';
import { SharedModule } from 'shared';

import { BirthdayComponent } from './birthday.component';
import { ReadingsModule } from './hover-card/readings.module';
import { DateInputComponent } from './date-input/date-input';

@NgModule({
  declarations: [BirthdayComponent, DateInputComponent],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,

    MayanNumberModule,
    SharedModule,
    ReadingsModule,

  ],
  exports: [
    BirthdayComponent,
    MatDatepickerModule,
    MatNativeDateModule,

    MayanNumberModule,
    SharedModule
  ]
})
export class BirthdayModule { }
