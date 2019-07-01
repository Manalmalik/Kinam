  import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Output,
  EventEmitter
} from '@angular/core';
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { tap, map, observeOn } from 'rxjs/operators';

@Directive({
  selector: '[parallax]'
})
export class ScrollDirective implements AfterViewInit {
  @Output() bgLoaded = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const src = '/assets/mayansBg.jpg';
    const img = this.renderer.createElement('img');

    img.src = src;

    fromEvent(img, 'load')
      .pipe(
        tap(() => {
          this.bgLoaded.emit();
          // @TODO: Loading spinner
          // debugger

          this.el.nativeElement.style.backgroundImage = `url(${src})`;
          fromEvent<Event>(document.body, 'scroll')
            .pipe(
              map(event => event.target),
              observeOn(animationFrameScheduler)
            )
            .subscribe(target => {
              const numberOfSlides = 3;
              const progress =
                (Math.floor(this.el.nativeElement.scrollLeft) +
                  this.el.nativeElement.clientWidth) /
                this.el.nativeElement.scrollWidth;

                // debugger

              console.log(progress);

              this.el.nativeElement.style.backgroundPositionX = `-${Math.floor(
                target['scrollLeft']
              ) * 1.5}px`;
            });
        })
      )
      .subscribe(res => {});
  }
}
