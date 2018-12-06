
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MayaNumberBlockComponent } from './maya-number-block.component';
import { MayaNumberModule } from '../maya-number/maya-number.module';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    CommonModule,
    MayaNumberModule,
  ],
  declarations: [
    MayaNumberBlockComponent,
  ],
  exports: [MayaNumberBlockComponent],
})
export class MayaNumberBlockModule { }
