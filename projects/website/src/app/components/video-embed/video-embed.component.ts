import { Component, ChangeDetectionStrategy, AfterContentInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'kinam-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoEmbedComponent implements AfterContentInit {

  constructor(private sanitize: DomSanitizer) { }

  public width: number;
  public height: number;
  @Input() url: string;

  public ngAfterContentInit() {
    const width = window.innerWidth * 0.5;
    this.width = width;
    this.height = width * 0.75;
  }

  public get sanitizedUrl() {
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
}
