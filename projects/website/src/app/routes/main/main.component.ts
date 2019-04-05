import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kinam-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

  goTo(id: number)  {
    const width = document.getElementById(`sec${id}`).clientWidth;
    document.getElementById('sidescroll').scrollTo({
      left: width * id - width,
      top: 0,
      behavior: 'smooth'
    });
  }
}
