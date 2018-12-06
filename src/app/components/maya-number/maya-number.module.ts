import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';

import { MayaNumberComponent } from './maya-number.component';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [CoreModule],
  declarations: [MayaNumberComponent],
  exports: [MayaNumberComponent],
})
export class MayaNumberModule { }
