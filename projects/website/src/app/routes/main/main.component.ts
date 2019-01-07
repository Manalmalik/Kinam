import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(private sanitize: DomSanitizer) {
    this.config = {
      licenseKey: 'No License key',
      anchors: ['welcom', 'mission'],
      sectionsColor: ['#000000'],
    };
  }

  public getRef(fullPageRef) {
    this.fullPage = fullPageRef;
  }

  public getSanitized(url: string): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
}
