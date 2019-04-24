import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  AfterContentInit
} from '@angular/core';
import { SVG } from './svg';

@Directive({
  selector: '[kinamIcon]'
})
export class IconDirective implements AfterContentInit {
  @Input() name: string;
  @Input() centered: boolean;
  @Input() customClasses: string[] = [];
  @Input() type: string;
  @Input() animate: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private _animateIfSet() {
    if (this.animate) {
      setTimeout(
        () => this.renderer.addClass(this.el.nativeElement, 'animate'),
        0
      );
    }
  }

  private _addCustomClasses() {
    this.renderer.addClass(this.el.nativeElement, `${this.type}-icon`);
    this.renderer.addClass(this.el.nativeElement, `icon-${this.name}`);
    this.customClasses.forEach(cls => {
      this.renderer.addClass(this.el.nativeElement, cls);
    });
  }

  public ngAfterContentInit(): void {
    if (SVG[this.name]) {
      this.el.nativeElement.innerHTML = SVG[this.name];
    }

    this._addCustomClasses();
    this._animateIfSet();
  }
}
