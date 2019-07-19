import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { Meta } from '@angular/platform-browser';

import { AbstractMenu } from '@website/components/menu/abstract-menu';
import { LandingService, TitleService } from '@website/services';
@Component({
  selector: 'kinam-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends AbstractMenu implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(landingService: LandingService, private _builder: AnimationBuilder, private titleService: TitleService, private meta: Meta) {
    super(landingService);
  }

  public ngOnInit() {
    this.meta.removeTag('name=description');
    this.meta.addTag({ name: 'description', content: 'Unique jackets for a good cause, using hand-woven textiles by Maya-descendant artisans from Guatemala and produced in EU with collaboration of product developer experts from Berlin.' });
    this.titleService.setTitle({ description: 'The Jacket - Garments Telling Stories' });

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
    }, 200);
  }
}
