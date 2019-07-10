import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

import { TitleService, LandingService } from '@website/services';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService, private titleService: TitleService) { }

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
  }
}
