import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { Meta } from '@angular/platform-browser';

import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-mayans',
  templateUrl: './mayans.component.html',
  styleUrls: ['./mayans.component.scss']
})
export class MayansComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private meta: Meta,
    private titleService: TitleService,
    private _builder: AnimationBuilder,

  ) { }

  ngOnInit() {
    const anim = this._builder.build([
      style({
        transform: `translateY(-100px)`,
        opacity: '0'
      }),
      animate(
        '400ms ease-out',
        style({
          transform: `translateY(0px)`,
          opacity: '1'
        }),
      )
    ]);

    setTimeout(() => anim.create(this.main.nativeElement).play(), 200);
    this.meta.removeTag('name=image');
    this.meta.addTag({ name: 'image', content: 'https://kinam13.com/assets/mayansBg.jpg' });
    this.meta.removeTag('name=description');
    this.meta.addTag({ name: 'description', content: `In the jungles of Guatemala the ancient civilization of the Mayas with its beautiful art, architecture & astrology is waiting to be shared with the world.` });
    this.titleService.setTitle({ description: 'An Ancient Civilization.' })
  }
}
