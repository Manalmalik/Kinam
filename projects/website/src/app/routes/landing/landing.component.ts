import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

import { TitleService, LandingService } from '@website/services';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService, private titleService: TitleService, private _builder: AnimationBuilder) { }

  @ViewChild('main') main: ElementRef;
  @ViewChild('mayansImg') mayansImg: ElementRef;
  @ViewChild('socialImg') socialImg: ElementRef;
  @ViewChildren('jacketGrid') jackgetGrid: ElementRef;

  public toggleMenu() {
    this.landingService.toggleMenu();
  }

  public ngOnInit() {
    this.titleService.setTitle({
      description: 'A Portal to the Mayan World - Fashion. Music. Art. Technology. - Support our Crowdfunding!'
    });

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
