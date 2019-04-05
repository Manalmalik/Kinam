import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import { fromEvent } from 'rxjs';

@Directive({
    selector: '[parallax]'
})
export class ScrollDirective implements AfterViewInit {
    constructor(private el: ElementRef) { }
    ngAfterViewInit(): void {
        fromEvent(this.el.nativeElement, 'scroll').subscribe(
            (event: Event) => {
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
                this.el.nativeElement.style.backgroundPositionX = `-${Math.floor(event.target['scrollLeft']) * 1.2}px`;
            }
        );
    }
}
