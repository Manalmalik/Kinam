import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SharedModule } from 'shared';
import { BirthdayComponent } from './birthday.component';
import { MayaNumberBlockModule } from '../maya-number-block/maya-number-block.module';

@NgModule({
  declarations: [BirthdayComponent],
  imports: [
    CommonModule,

    MatDatepickerModule,
    MatNativeDateModule,

    SharedModule,
    MayaNumberBlockModule,
  ],
  exports: [BirthdayComponent]
})
export class BirthdayModule { }
