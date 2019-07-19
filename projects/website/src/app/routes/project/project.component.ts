import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { TitleService, MetaService } from '@website/services';

@Component({
  selector: 'kinam-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @ViewChild('main') main: ElementRef;

  constructor(
    private meta: Meta,
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

    this.metaService.removeMeta();

    this.meta.addTag({ name: 'image', content: 'https://kinam13.com/assets/socialBg.jpg' });
    this.meta.addTag({ name: 'description', content: `We aim to build pride and appreciation for the Maya culture amongst younger generations and equip them with the necessary tools for future success.` });

    this.meta.addTag({ name: 'og:title', content: 'Education Through Football. Unveiling Maya Art. Discovering Ancient Secrets.' });
    this.meta.addTag({ name: 'og:image', content: 'https://kinam13.com/assets/socialBg.jpg' });
    this.meta.addTag({ name: 'og:description', content: `We aim to build pride and appreciation for the Maya culture amongst younger generations and equip them with the necessary tools for future success.` });
    this.meta.addTag({ name: 'og:url', content: `https://kinam13.com/social-projects` });
    this.meta.addTag({ name: 'og:type', content: `website` });

    this.titleService.setTitle({ description: 'Education Through Football. Unveiling Maya Art. Discovering Ancient Secrets.' })
  }
}
