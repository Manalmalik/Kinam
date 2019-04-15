import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ButterCMSService, Slug } from '../../services/butter.service';
import { Observable, pipe } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { tap, map } from 'rxjs/operators';

const mapApiResponse = () => map(res => Object.keys(res).map(key  => ({
    type: key.split('_')[0],
    typeId: key.split('_')[1] ? +key.split('_')[1] : null,
    value: res[key],
  })));


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

  @ViewChild('scroll') private scroll: ElementRef;

  constructor(
    private butterCmsService: ButterCMSService,


  ) { }
  
  ngOnInit() {
    this.intro$ = this.butterCmsService.retrievePage(Slug.Intro).pipe(
      mapApiResponse()
    );
    this.problem$ = this.butterCmsService.retrievePage(Slug.Problem).pipe(
      mapApiResponse()
    );
  }

  goTo(id: number)  {
    const width = document.getElementById(`sec${id}`).clientWidth;

    this.scroll.nativeElement.scrollTo({
      left: width * id - width,
      top: 0,
      behavior: 'smooth'
    });
  }
}
