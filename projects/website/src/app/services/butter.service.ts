// import * as Butter from 'buttercms';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Out of order but maybe we can reuse parts.
 */
// const butterService = Butter('f191243d27be9dccf728c54ad7b446fd41ca6454');
const butterService: any = 'f191243d27be9dccf728c54ad7b446fd41ca6454';

enum ContentType {
  Title = 'title', // short text
  Text = 'text', // long text
  Picture = 'picture', // media
  Video = 'video' // to be defined
}

export enum Slug {
  Intro = 'intro',
  Problem = 'the-problem'
}

export enum CmsLink {
  Cdn = 'https://cdn.buttercms.com/',
  FileStack = 'https://fs.buttercms.com/'
}

@Injectable({
  providedIn: 'root'
})
export class ButterCMSService {
  public retrievePage(slug: Slug, type = '*') {
    return from(butterService.page.retrieve(type, slug));
    // map(res => res.data.data.fields)
  }

  public listPages(params = {}, type = '*') {
    return from(butterService.page.list(type, params));
  }

  public getThumbnail(link: string, width: number): string {
    const id = link.split(CmsLink.Cdn).filter(x => !!x)[0];
    return `${CmsLink.FileStack}/resize=width:${width}/${id}`;
  }
}
