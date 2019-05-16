import { Directive, ElementRef, AfterContentChecked, Output, EventEmitter } from '@angular/core';

import ScrollSnap from 'scroll-snap';
import { debounce } from 'decko';

const snapConfig = {
  scrollSnapDestination: '100% 0%',
  scrollTimeout: 100,
  scrollTime: 300
};

@Directive({
  selector: '[kinamScrollSnap]'
})
export class ScrollSnapDirective implements AfterContentChecked {

  @Output() snap = new EventEmitter();

  constructor(private el: ElementRef) { }

  @debounce(125)
  private _scrollBind() {
    const { scrollWidth } = this.el.nativeElement.getElementsByClassName('image-container')[0];
    const index = Math.round(
      this.el.nativeElement.scrollLeft / scrollWidth
    );
    this.snap.emit(`${index}`);
  }

  public ngAfterContentChecked() {
    const snap = new ScrollSnap(this.el.nativeElement, snapConfig);

    snap.bind(() => this._scrollBind());
  }
}
