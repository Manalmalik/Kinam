import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.meta.addTag({ name: 'description', content: `We aim to build pride and appreciation for the Maya culture amongst younger generations and equip them with the necessary tools for future success. ` });
    this.titleService.setTitle({ description: 'Education Through Football. Unveiling Maya Art. Discovering Ancient Secrets.    ' })
  }
}
