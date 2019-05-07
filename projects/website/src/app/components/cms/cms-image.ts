import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

/**
 * TODO: replace cms service
 */
@Component({
  selector: 'kinam-cms-image',
  template: `
    <img class="content-img" (click)="openTab(url)" [src]="thumbnail" />
  `,
  styles: [
    `
    @media screen and (min-width: 1280px) {
      .content-img {
        margin: 1.5rem 0;
      }

      .content-img {
        margin: 0.75rem 0;
        box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.5);
        width: 100%;
      }
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsImageComponent {
  public thumbnail: string;
  @Input() url: string;
  openTab(url: string) {
    const win = window.open(url, '_blank');
    win.focus();
  }
}
