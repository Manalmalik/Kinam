import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'kinam-cms-block',
  template: `
    <ng-container [ngSwitch]="type">
      <h1
        *ngSwitchCase="'title'"
        class="title card card__black has-text-centered"
      >
        {{ value }}
      </h1>
      <kinam-cms-paragraph
        *ngSwitchCase="'intro'"
        [html]="value"
      ></kinam-cms-paragraph>
      <kinam-cms-paragraph
        *ngSwitchCase="'text'"
        [html]="value"
      ></kinam-cms-paragraph>
      <kinam-cms-image
        *ngSwitchCase="'picture'"
        [url]="value"
      ></kinam-cms-image>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsBlockComponent {
  @Input() public type: string;
  @Input() public value: string;
}
