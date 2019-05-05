import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { CmsService } from '@website/services/cms.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CmsService } from '../../services/cms.service';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  constructor(private cmsService: CmsService) { }

  public content$: Observable<any>;

  public ngOnInit() {
    this.content$ = this.cmsService
      .getCollection('landing')
      .pipe(map(x => x.entries[0]));
  }
}
