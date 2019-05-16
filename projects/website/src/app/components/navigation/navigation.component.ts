import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'kinam-navigation',
  template: `
    <ng-container
      *ngFor="let step of steps"
    >
      <div
        class="nav-button"
        [class.selected]="step.step === selectedStep"
        [id]="step.id"
        (click)="goTo(step.step)"
      ></div>
    </ng-container>
  `,
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() selectedStep = '0';
  @Input() steps = [
    { step: '0', id: 'step-0' },
    { step: '1', id: 'step-1' },
    { step: '2', id: 'step-2' },
    { step: '3', id: 'step-3' },
  ];

  goTo(id: string) {
    // const width = document.getElementById(`sec${id}`).clientWidth;

    // document.getElementById(id).scrollTo({
    //   left: width * +id - width,
    //   top: 0,
    //   behavior: 'smooth'
    // });
  }
}
