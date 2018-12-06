import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { CoreModule } from '@app/core';
import { CalculatorComponent } from './calculator.component';
import { MayaNumberBlockModule } from '../maya-number-block/maya-number-block.module';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,

    CoreModule,
    MayaNumberBlockModule,
  ],
  declarations: [
    CalculatorComponent,
  ],
  exports: [CalculatorComponent],
})
export class CalculatorModule { }
