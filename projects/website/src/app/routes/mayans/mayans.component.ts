import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

import { TitleService, MetaService } from '@website/services';

@Component({
  selector: 'kinam-mayans',
  templateUrl: './mayans.component.html',
  styleUrls: ['./mayans.component.scss']
})
export class MayansComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private titleService: TitleService,
    private _builder: AnimationBuilder,
    private metaService: MetaService,
  ) { }

  ngOnInit() {
    this._playAnimation();

    this.metaService.setMeta({
      description: 'In the jungles of Guatemala the ancient civilization of the Mayas with its beautiful art, architecture & astrology is waiting to be shared with the world.',
      image: 'https://kinam13.com/assets/mayansBg.jpg',
      title: 'An Ancient Civilization.',
      url: `https://kinam13.com/the-mayans`
    });

    this.titleService.setTitle({ description: 'An Ancient Civilization.' })
  }

  private _playAnimation() {
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

  }
}
