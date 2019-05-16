import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CmsService } from 'core';
import { memoize } from 'decko';



@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  constructor(private cmsService: CmsService) { }

  public content$: Observable<any>;
  public calendar$: Observable<any>;

  public selectedStepTop = '0';
  public selectedStepBottom = '0';

  public menuHidden = true;

  @ViewChild('sliderContainer') sliderContainer: ElementRef;


  public ngOnInit() {
    this.content$ = this.cmsService.getSingleton('landing');
    this.calendar$ = of({
      calculating: 'Calculating',
      your_nahual: 'Your Nahual',
      your_daysign: 'Your Day Sign',
      your_nahual_number: 'Your Nahual Number',
    });
  }

  public snapTop(e) {
    this.selectedStepTop = e;
  }

  public snapBottom(e) {
    this.selectedStepBottom = e;
  }

  public toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
