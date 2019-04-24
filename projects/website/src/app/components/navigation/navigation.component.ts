import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'kinam-navigation',
  template: `
    <div class="nav-button selected" id="nav-1" (click)="goTo(1)"></div>
    <div class="nav-button" id="nav-2" (click)="goTo(2)"></div>
    <div class="nav-button" id="nav-3" (click)="goTo(3)"></div>
  `,
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  goTo(id: number) {
    const width = document.getElementById(`sec${id}`).clientWidth;

    document.getElementById('').scrollTo({
      left: width * id - width,
      top: 0,
      behavior: 'smooth'
    });
  }
}
