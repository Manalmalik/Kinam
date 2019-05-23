import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

import { CmsService, BIRTDAY_VALIDATORS } from 'core';
import { LandingService } from './landing.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer: ElementRef;

  constructor(private cmsService: CmsService, private landingService: LandingService) { }

  public content$: Observable<any>;
  public calendar$: Observable<any>;

  public selectedStepTop = '0';
  public selectedStepBottom = '0';

  public form: FormGroup;

  private _maxIndex = 0;
  private _currentIndex = 0;

  public ngOnInit() {
    this.content$ = this.cmsService.getSingleton('landing');
    const timestamp = new Date();
    this.form = new FormGroup({
      day: new FormControl(timestamp.getDate(), BIRTDAY_VALIDATORS.day),
      month: new FormControl(timestamp.getMonth() + 1, BIRTDAY_VALIDATORS.month),
      year: new FormControl(timestamp.getFullYear(), BIRTDAY_VALIDATORS.year)
    });
  }


  public patch() {
    this.form.patchValue({
      day: 22
    });
  }

  ngAfterViewInit() {
    timer(3000).subscribe(
      res => {
        const increment = this._currentIndex = this._currentIndex + 1;
        if (increment === this._maxIndex) {
          this._currentIndex = 0;
          return;
        }
        this._currentIndex = this._currentIndex + 1;
      }
    );
  }


  public toggleMenu() {
    this.landingService.toggleMenu();
  }

  public snapTop(e) {
    this.selectedStepTop = e;
  }

  public snapBottom(e) {
    this.selectedStepBottom = e;
  }


}
