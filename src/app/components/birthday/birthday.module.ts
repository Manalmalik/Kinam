import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SharedModule } from 'shared';
import { MayanNumberModule } from 'mayan-number';

import { BirthdayComponent } from './birthday.component';

@NgModule({
  declarations: [BirthdayComponent],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,

    MayanNumberModule,
    SharedModule,
  ],
  exports: [BirthdayComponent]
})
export class BirthdayModule { }
