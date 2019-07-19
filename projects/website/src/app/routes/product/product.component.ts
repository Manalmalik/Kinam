import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AbstractMenu } from '@website/components/menu/abstract-menu';
import { LandingService } from '@website/services';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'kinam-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends AbstractMenu implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(landingService: LandingService, private _builder: AnimationBuilder) {
    super(landingService);
  }

  public ngOnInit() {
    const anim = this._builder.build([
      style({
        transform: `translateY(-100px)`,
        opacity: '0'
      }),
      animate(
        '400ms ease-out',
        style({
          transform: `translateY(0px)`,
          opacity: '1'
        }),
      )
    ]);

    setTimeout(() => {
      anim.create(this.main.nativeElement).play();
    }, 200)
  }
}
