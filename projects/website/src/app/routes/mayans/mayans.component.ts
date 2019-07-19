import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-mayans',
  templateUrl: './mayans.component.html',
  styleUrls: ['./mayans.component.scss']
})
export class MayansComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.meta.removeTag('name=description');
    this.meta.addTag({ name: 'description', content: `In the jungles of Guatemala the ancient civilization of the Mayas with its beautiful art, architecture & astrology is waiting to be shared with the world.` });
    this.titleService.setTitle({ description: 'An Ancient Civilization.' })
  }
}
