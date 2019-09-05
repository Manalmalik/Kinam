import { Component, EventEmitter, Output } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'kinam-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {

  @Output() imageChange = new EventEmitter();

  constructor(
    private _animBuilder: AnimationBuilder,
  ) { }

  public position = 0;
  private _previousPercent = 0;

  public tribes = [
    'Huracan',
    `Ixchel`,
    'Quetzal'
  ];

  public slide(el, dir: 'left' | 'right') {
    let percent;

    const numberOfSlides = this.tribes.length;
    const partial = 100 / numberOfSlides;

    switch (dir) {
      case 'left': {
        if (this.position === 0) {
          this.position = 0;
          percent = 0;
          break
        }
        this.position -= 1;
        const val = -this.position * partial;
        if (val === 0) {
          percent = `0`;
        } else {
          percent = `${val}%`;
        }
        break
      }
      case 'right': {
        if (this.position === this.tribes.length - 1) {
          return;
        }
        this.position += 1;
        const val = -this.position * partial;
        if (val === 0) {
          percent = `0`;
        } else {
          percent = `${val}%`;
        }
        break
      }
    }

    if (percent === '-Infinity%') {
      percent = '0';
    }

    const anim = this._animBuilder.build([
      style({
        transform: `translateX(${this._previousPercent})`,
      }),
      animate(
        '400ms ease-in-out',
        style({
          transform: `translateX(${percent})`,
        }),
      )
    ]).create(el);

    anim.play();

    this._previousPercent = percent;
    
    this.imageChange.emit((this.position + 1 ) / this.tribes.length);

  }
}
