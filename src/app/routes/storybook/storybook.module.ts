import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { BirthdayModule } from 'ng-maya-birthday';
import { MayanNumberModule } from 'ng-maya-number';

import { StorybookComponent } from './storybook.component';

@NgModule({
  declarations: [StorybookComponent],
  imports: [
    SharedModule,
    BirthdayModule,
    MayanNumberModule,
  ],
  exports: [StorybookComponent]
})
export class StorybookModule { }
