import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ButterCMSService, Slug } from '../../services/butter.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'kinam-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {

  public intro$: Observable<any>;
  public problem$: Observable<any>;

  public loaded = false;

  constructor(
    private butterCmsService: ButterCMSService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.intro$ = this.butterCmsService.retrievePage(Slug.Intro).pipe(
      tap(res => {
        Object.keys(res).map(key  => ({
          type: key.split('_')[0],
          typeId: key.split('_')[1] ? +key.split('_')[1] : null,
          value: res[key],
        }));

        this.problem$ = this.butterCmsService.retrievePage(Slug.Problem);
        }
      )
    );
  }

  openTab(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  getSanitized(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getThumbnail(link: string, width: number): string {
    return this.butterCmsService.getThumbnail(link, width);
  }
 
  goTo(id: number)  {
    const width = document.getElementById(`sec${id}`).clientWidth;
    document.getElementById('sidescroll').scrollTo({
      left: width * id - width,
      top: 0,
      behavior: 'smooth'
    });
  }
}
