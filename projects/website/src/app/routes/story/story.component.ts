import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TitleService } from '@website/services';

@Component({
  selector: 'kinam-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.meta.removeTag('name=description');
    this.meta.addTag({ name: 'description', content: `Making the world a better place, one jacket at a time. Hand-woven with love by Maya-descendant artisans in Guatemala.` });
    this.titleService.setTitle({ description: 'Building sustainable ecosystems.' })
  }
}

