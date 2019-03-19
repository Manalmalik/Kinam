import { NgModule } from '@angular/core';

import { CoreModule } from 'core';

import { MayaNumberComponent } from './maya-number/maya-number.component';
import { MayaNumberBlockComponent } from './maya-number-block/maya-number-block.component';

@NgModule({
  imports: [CoreModule],
  declarations: [
    MayaNumberComponent,
    MayaNumberBlockComponent,
  ],
  exports: [
    MayaNumberComponent,
    MayaNumberBlockComponent,
  ],
})
export class MayanNumberModule { }
