import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

import { from, animationFrameScheduler, of, fromEvent } from 'rxjs';
import { observeOn, filter, debounce, debounceTime, map } from 'rxjs/operators';

import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  constructor(private titleService: TitleService, private renderer: Renderer2) {}

  @ViewChild('mayansImg') mayansImg: ElementRef;
  @ViewChild('socialImg') socialImg: ElementRef;
  @ViewChildren('jacketGrid') jackgetGrid: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
      of(e).pipe(
        observeOn(animationFrameScheduler),
        map((res) => res.target.scrollingElement)
      ).subscribe(
        res => {  
          const { scrollTop, scrollHeight } = res;
          const height = scrollHeight - window.innerHeight;
          const percent  = Math.floor((scrollTop / height) * 100);
          this.renderer.setStyle(this.mayansImg.nativeElement, `background-position-y`, `${percent}%`)
          this.renderer.setStyle(this.socialImg.nativeElement, `background-position-y`, `${percent}%`)
        }
      )
  }

  public ngOnInit() {
    this.titleService.setTitle({ 
      description: 'A Portal to the Mayan World - Fashion. Music. Art. Technology. - Support our Crowdfunding!' 
    });
  }
}
