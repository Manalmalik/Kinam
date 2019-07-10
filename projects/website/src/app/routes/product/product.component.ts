import { Component } from '@angular/core';
import { AbstractMenu } from '@website/components/menu/abstract-menu';
import { LandingService } from '@website/services';

@Component({
  selector: 'kinam-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends AbstractMenu {
  constructor(landingService: LandingService) {
    super(landingService);
  }
}
