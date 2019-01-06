
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './icon.module';
/**
 * Implementation for the icon logic.
 */

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [CommonModule, IconModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Make sure this module is imported only once.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
