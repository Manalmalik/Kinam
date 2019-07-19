import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) { }

  public removeMeta() {
    this.meta.removeTag(`name='og:image'`);
    this.meta.removeTag(`name='og:description'`);
    this.meta.removeTag(`name='og:url'`);
    this.meta.removeTag(`name='og:title'`);

    this.meta.removeTag('name=image');
    this.meta.removeTag('name=description');
  }

  public setMeta({
    description,
    image,
    title,
    url
  }) {
    this.meta.addTag({ name: 'description', content: description });
    this.meta.addTag({ name: 'image', content: image });

    this.meta.addTag({ name: 'og:title', content: title });
    this.meta.addTag({ name: 'og:image', content: image });
    this.meta.addTag({ name: 'og:description', content: description });
    this.meta.addTag({ name: 'og:url', content: url });
  }
}
