import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from './product-slider.component';
import { SharedModule } from 'shared';


@NgModule({
  declarations: [ProductSliderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ProductSliderComponent]
})
export class ProductSliderModule {
}
