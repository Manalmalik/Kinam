import { Component } from '@angular/core';

import { CmsService } from 'core';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {

  constructor(private cmsService: CmsService, private landingService: LandingService) { }


  /**
   * Legacy: Start
   */

  // @ViewChild('sliderContainer') sliderContainer: ElementRef;
  // public form: FormGroup;
  // public content$: Observable<any>;
  // public calendar$: Observable<any>;
  // public selectedStepTop = '0';
  // public selectedStepBottom = '0';
  // public ngOnInit() {
  // this.content$ = this.cmsService.getSingleton('landing');
  // const timestamp = new Date();
  // this.form = new FormGroup({
  //   day: new FormControl(timestamp.getDate(), BIRTDAY_VALIDATORS.day),
  //   month: new FormControl(timestamp.getMonth() + 1, BIRTDAY_VALIDATORS.month),
  //   year: new FormControl(timestamp.getFullYear(), BIRTDAY_VALIDATORS.year)
  // });
  // }
  // public patch() {
  //   this.form.patchValue({ day: 22 });
  // }

  // public toggleMenu() {
  //   this.landingService.toggleMenu();
  // }

  // public snapTop(e) {
  //   this.selectedStepTop = e;
  // }

  // public snapBottom(e) {
  //   this.selectedStepBottom = e;
  // }

  /**
   * Legacy: End
   */
}
