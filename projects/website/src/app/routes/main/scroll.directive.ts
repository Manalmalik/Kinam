import { Directive, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { tap, map, observeOn } from 'rxjs/operators';

@Directive({
    selector: '[parallax]'
})
export class ScrollDirective implements AfterViewInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }
    ngAfterViewInit(): void {
        const src = 'https://cdn.buttercms.com/V6D8FCrKTfiefKevP1WH';
        const img = this.renderer.createElement('img');

        img.src = src;

        fromEvent(img, 'load').pipe(
            tap(() => {
                // @TODO: Loading spinner
                this.el.nativeElement.style.backgroundImage = `url(${src})`;
                fromEvent<Event>(this.el.nativeElement, 'scroll').pipe(
                    map(event => event.target),
                    observeOn(animationFrameScheduler)
                ).subscribe(
                    (target) => {
                        const numberOfSlides = 3;
                        const progress = (Math.floor(this.el.nativeElement.scrollLeft) + this.el.nativeElement.clientWidth)
                        / this.el.nativeElement.scrollWidth;

                        document.getElementById('container-2').style.transform = `translateY(-${400 - progress * 600}px)`;
                        document.getElementById('container-3').style.transform = `translateY(-${600 - progress * 600}px)`;

                        if (progress * numberOfSlides <  numberOfSlides - 1.5) {
                            document.getElementById('nav-1').classList.add('selected');
                            document.getElementById('nav-2').classList.remove('selected');
                        }

                        if (progress * numberOfSlides >=  numberOfSlides - 1.5 &&  numberOfSlides - 0.5) {
                            document.getElementById('nav-1').classList.remove('selected');
                            document.getElementById('nav-2').classList.add('selected');
                            document.getElementById('nav-3').classList.remove('selected');
                        }

                        if (progress * numberOfSlides >= numberOfSlides - 0.5) {
                            document.getElementById('nav-2').classList.remove('selected');
                            document.getElementById('nav-3').classList.add('selected');
                        }

                        this.el.nativeElement.style.backgroundPositionX = `-${Math.floor(target['scrollLeft']) * 1.2}px`;
                    }
                );
            })
        ).subscribe(
            res => {}
        );

    }
}
