import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';

import { animationFrameScheduler, of } from 'rxjs';
import { observeOn, map, throttleTime } from 'rxjs/operators';

import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private titleService: TitleService, private renderer: Renderer2) { }

  @ViewChild('mayansImg') mayansImg: ElementRef;
  @ViewChild('socialImg') socialImg: ElementRef;
  @ViewChildren('jacketGrid') jackgetGrid: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    of(e).pipe(
      observeOn(animationFrameScheduler),
      throttleTime(30),
      map((res) => res.target.scrollingElement)
    ).subscribe(
      res => {
        const { scrollTop, scrollHeight } = res;
        const height = scrollHeight - window.innerHeight;
        const percent = Math.floor((scrollTop / height) * 100);
        if (percent > 10) {
          this.renderer.setStyle(this.mayansImg.nativeElement, `background-position-y`, `${percent}%`)
          if (percent > 30) {
            this.renderer.setStyle(this.socialImg.nativeElement, `background-position-y`, `${percent}%`)
          }
        }
      }
    )
  }

  public ngOnInit() {
    this.titleService.setTitle({
      description: 'A Portal to the Mayan World - Fashion. Music. Art. Technology. - Support our Crowdfunding!'
    });
  }
}
