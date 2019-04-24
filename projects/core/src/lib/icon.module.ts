import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconDirective, IconComponent],
  exports: [IconComponent, IconDirective]
})
export class IconModule {}
