import { NgModule } from "@angular/core";

import { CoreModule } from "core";
import { MayanNumberModule } from "ng-maya-number";
import { SharedModule } from "shared";

import { CalculatorComponent } from "./calculator.component";

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [CoreModule, MayanNumberModule, SharedModule],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent]
})
export class CalculatorModule {}
