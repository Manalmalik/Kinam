import { Component, Input } from '@angular/core';

@Component({
  selector: 'kinam-upload',
  template: `
    <div *ngIf="!!value" class="columns is-mobile is-gapless is-vcentered">
      <div class="column has-text-centered">
        <span>{{ value }}%</span>
      </div>
      <div class="column is-10 has-text-centered">
        <div style="display: flex;margin-right: 2rem;">
          <progress [value]="value" max="100"></progress>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upload-bar.component.scss']
})
export class UploadBarComponent {
  @Input() public value: number;
}
