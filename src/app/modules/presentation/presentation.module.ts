import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { PresentationComponent } from './presentation.component';

import { CalculatorModule } from '@app/components/calculator/calculator.module';
import { BirthdayModule } from '@app/components/birthday/birthday.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    SharedModule,
    BirthdayModule,
    CalculatorModule,
  ],
  exports: [PresentationComponent],
})
export class PresentationModule { }
