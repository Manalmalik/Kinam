import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ButterCMSService, Slug } from '../../services/butter.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
    this.intro$ = this.butterCmsService.retrievePage(Slug.Intro);
    this.problem$ = this.butterCmsService.retrievePage(Slug.Problem);
  }

  openTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  getSanitized(url) {
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
