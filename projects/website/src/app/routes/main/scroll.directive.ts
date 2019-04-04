import { Directive, ElementRef, AfterViewInit, NgZone } from "@angular/core";
import { fromEvent } from 'rxjs';


@Directive({
    selector: '[parallax]'
})
export class ScrollDirective implements AfterViewInit {
    constructor(private el: ElementRef, private zone: NgZone) { }

    ngAfterViewInit(): void {
        fromEvent(this.el.nativeElement, 'scroll').subscribe(
            (event: Event) => {
                this.el.nativeElement.style.backgroundPositionX = `-${Math.floor(event.target['scrollLeft'] * 1.5)}px`;
            }
        );
    }
}