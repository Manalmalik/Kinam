import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) { }

  public removeMeta() {
    const tags = [
      ...this.meta.getTags(`property='og:image'`),
      ...this.meta.getTags(`property='og:image'`),
      ...this.meta.getTags(`property='og:description'`),
      ...this.meta.getTags(`property='og:url'`),
      ...this.meta.getTags(`property='og:title'`),
      ...this.meta.getTags('name=image'),
      ...this.meta.getTags('name=description'),
    ];

    tags.forEach(t => this.meta.removeTagElement(t));

    debugger
  }

  public setMeta({
    description,
    image,
    title,
    url
  }) {
    this.removeMeta();
    this.meta.addTag({ name: 'description', content: description });
    this.meta.addTag({ name: 'image', content: image });

    this.meta.addTag({ property: 'og:title', content: title });
    this.meta.addTag({ property: 'og:image', content: image });
    this.meta.addTag({ property: 'og:description', content: description });
    this.meta.addTag({ property: 'og:url', content: url });
  }
}
