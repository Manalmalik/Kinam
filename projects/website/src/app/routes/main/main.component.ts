import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('scroll') scroll: ElementRef;

  public get percentOfStory() {
    const val =
      (this.scroll.nativeElement.scrollLeft + this.scroll.nativeElement.clientWidth)
     / this.scroll.nativeElement.scrollWidth;
    return val;
  }

  public get card2Transform() {
    return (400 - (this.percentOfStory * 3 * 200) > 0) ? 
    { 'transform':  `translateY(-${320 - (this.percentOfStory * 3 * 200)}px)`}
    : null;
  }

  public get card3Transform() {
    console.log(600 - this.percentOfStory * 3 * 200)
    return (600 - (this.percentOfStory * 3 * 200) > 0) ? 
    { 'transform':  `translateY(-${600 - (this.percentOfStory * 3 * 200)}px)`}
    : null;
  }

  // public get card3Transform() {
  //   return (this.percentOfStory > 0. && this.percentOfStory < 0.66) ? 
  //   { 'transform':  `translateY(${400 - this.percentOfStory * 600}px)`}
  //   : null;
  // }

  public get scrollLeftCss() { 
    return { 'background-position-x':  `-${this.scroll.nativeElement.scrollLeft * 1.5}px`};
  }

  public get sec2Css() {
    return { }
  }

  goTo(id)  {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }

  constructor(private sanitize: DomSanitizer) { }

  handleScroll() { }
}
