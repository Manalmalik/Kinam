import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService, MetaService } from '@website/services';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'kinam-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private titleService: TitleService,
    private _builder: AnimationBuilder,
    private metaService: MetaService,
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

    this.metaService.setMeta({
      description: 'From the beginning, KINAM’s mission was to share meaningful stories with people to form new emotional connections across the globe.',
      image: 'https://kinam.io/assets/wall_bg.jpg',
      title: 'Stories told by music.',
      url: `https://kinam.io/music`
    });

    this.titleService.setTitle({ description: 'Stories told by music.' })
  }
}
