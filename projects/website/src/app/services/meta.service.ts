import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) { }

  public removeMeta() {
    this.meta.removeTag('name=og:image');
    this.meta.removeTag('name=og:description');
    this.meta.removeTag('name=image');
    this.meta.removeTag('name=description');
  }
}
