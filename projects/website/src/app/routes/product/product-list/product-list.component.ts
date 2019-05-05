import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CmsService, AssetId } from '../../../services/cms.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'kinam-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductListComponent implements AfterViewInit {

  public param$: Observable<string>;

  public id;

  @ViewChild('bgImage') bgImage: ElementRef;

  constructor(route: ActivatedRoute, private router: Router, private cmsService: CmsService) {
    this.param$ = route.queryParams.pipe(map(p => {
      return p.style || 'flex';
    }));
  }

  public getThumbnail(src) {
    return this.cmsService.getThumbnail(src);
  }


  public ngAfterViewInit() {
    this.bgImage.nativeElement.style.innerWidth = window.innerWidth;
  }

  public setInFocus(id) {
    this.id = id;
  }
}
