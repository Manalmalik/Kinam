import { NgModule } from '@angular/core';

import { StorybookComponent } from './storybook.component';
import { BirthdayModule } from '@app/components/birthday/birthday.module';
import { SharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [StorybookComponent],
  imports: [
    AppRoutingModule,
  ],
  exports: [StorybookComponent]
})
export class StorybookModule { }
