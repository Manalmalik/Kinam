import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { MatTabChangeEvent } from '@angular/material';

import { AbstractMenu } from '@website/components/menu/abstract-menu';
import { LandingService, TitleService, MetaService } from '@website/services';
@Component({
  selector: 'kinam-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends AbstractMenu implements OnInit {
  @ViewChild('main') main: ElementRef;

  currentTabIndex = 0;
  currentImage = 0.3;

  constructor(
    landingService: LandingService,
    private _builder: AnimationBuilder,
    private titleService: TitleService,
    private metaService: MetaService,
  ) {
    super(landingService);
  }

  public ngOnInit() {
    
    /* automate the slider */
    setInterval(() => {
      this.currentTabIndex++;
      if (this.currentTabIndex > 2 || this.currentTabIndex < 0) {
        this.currentTabIndex = 0;
      }
    }, 5000); // 1000 means 1 sec delay
  
    this.metaService.setMeta({
      description: 'Unique jackets for a good cause, using hand-woven textiles by Maya-descendant artisans from Guatemala and produced in EU with collaboration of product developer experts from Berlin.',
      image: 'https://kinam13.com/assets/models/kaqchikel.png',
      title: 'The Jacket - Garments Telling Stories.',
      url: `https://kinam13.com/the-jacket`
    });

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
  /* get the index of selected tab */
  // tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  //   this.currentTabIndex = tabChangeEvent.index;
  // }
  
  /* get the value of selected arrow */
  displayImage(currentImage) {
    this.currentImage = currentImage;
  }
}
