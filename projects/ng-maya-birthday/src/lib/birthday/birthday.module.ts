import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MayanNumberModule } from 'ng-maya-number';
import { SharedModule } from 'shared';

import { BirthdayComponent } from './birthday.component';
@NgModule({
  declarations: [BirthdayComponent],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,

    MayanNumberModule,
    SharedModule,

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
