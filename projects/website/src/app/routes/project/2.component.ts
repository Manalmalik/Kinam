import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TitleService, MetaService } from '@website/services';

@Component({
  selector: 'kinam-project-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss']
})
export class ProjectComponent2 implements OnInit {
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
      description: 'We aim to build pride and appreciation for the Maya culture amongst younger generations and equip them with the necessary tools for future success.',
      image: 'https://kinam13.com/assets/socialBg.jpg',
      title: 'Education Through Football. Unveiling Maya Art. Discovering Ancient Secrets.',
      url: `https://kinam13.com/social-projects-2`
    });

    this.titleService.setTitle({ description: 'Education Through Football. Unveiling Maya Art. Discovering Ancient Secrets.' })
  }
}
