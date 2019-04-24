import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'kinam-cms-paragraph',
  template: `
    <p class="card card__black" [innerHTML]="html"></p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsParagraphComponent {
  @Input() html;
}
