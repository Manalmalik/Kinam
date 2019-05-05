import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'kinam-cms-paragraph',
  template: `
    <p class="card card__black font-gothic" [innerHTML]="html"></p>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsParagraphComponent {
  @Input() html;
}
