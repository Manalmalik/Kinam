import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kinam-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  public activeElement: number;
  public fullPage;
  public config;

  constructor() {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      // menu: '#menu',
      // navigation: true,
      sectionsColor: ['#000000', '#000000', '#000000'],
    };
  }

  getRef(fullPageRef) {
    this.fullPage = fullPageRef;
  }
}
