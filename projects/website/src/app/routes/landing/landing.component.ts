import { Component, OnInit } from '@angular/core';

import { LandingService } from '../../services/landing.service';
import { TitleService } from '@website/services/title.service';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService, private titleService: TitleService) { }

  public ngOnInit() {
    this.titleService.setTitle({ description: 'Welcome to Guatemala - Fashion. Music. Technology. Support our Crowdfunding!' });
  }
}
