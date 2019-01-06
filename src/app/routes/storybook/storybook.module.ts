import { NgModule } from '@angular/core';

import { StorybookComponent } from './storybook.component';

import { AppRoutingModule } from '@app/app-routing.module';
import { CalculatorModule } from '@app/components/calculator/calculator.module';
import { SharedModule } from '@app/shared';
import { BirthdayModule } from '@app/components/birthday/birthday.module';

@NgModule({
  declarations: [StorybookComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    BirthdayModule,
    CalculatorModule,
  ],
  exports: [StorybookComponent]
})
export class StorybookModule { }
