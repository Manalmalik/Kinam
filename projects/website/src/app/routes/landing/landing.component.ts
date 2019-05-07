import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CmsService } from 'core';

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

  public ngOnInit() {
    this.content$ = this.cmsService.getSingleton('landing');
    this.calendar$ = this.cmsService.getSingleton('calendar');
  }
}
