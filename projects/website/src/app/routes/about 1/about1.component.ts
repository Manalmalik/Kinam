import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService, MetaService } from '@website/services';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'kinam-about-1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.scss']
})


export class About1Component implements OnInit {
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
      description: 'The idea for KINAM was born in 2013 in Guatemala as a way to celebrate the ancient Maya traditions.',
      image: 'https://kinam13.com/assets/socialBg.jpg',
      title: 'Growing stronger together.',
      url: `https://kinam13.com/about-1`
    });

    this.titleService.setTitle({ description: 'Growing stronger together.' })

  }
}
