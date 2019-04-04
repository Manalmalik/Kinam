import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { memoize } from 'decko';

@Component({
  selector: 'kinam-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public activeElement: number;
  public fullPage;
  public config;

  obs = [];

  public menuHidden = false;

  @ViewChild('scroll') scroll: ElementRef;

  ngOnInit() {
    of(1).pipe(
      delay(1000)
    ).subscribe(
      _ => (this.menuHidden = true)
    );
  }

  public get percentOfStory() {
    return (Math.floor(this.scroll.nativeElement.scrollLeft) + this.scroll.nativeElement.clientWidth)
     / this.scroll.nativeElement.scrollWidth;
  }

  @memoize
  public card2Transform(percentOfStory) {
    const transform = Math.floor((percentOfStory * 3 * 200));
    return (600 - (transform) > 0) ? 
    { 'transform':  `translateY(-${400 - transform}px)`}
    : null;
  }
  
  @memoize
  public card3Transform(percentOfStory) {
    const transform = Math.floor((percentOfStory * 3 * 200));
    return (600 - (transform) > 0 && 600 - (transform) < 200) ? 
    { 'transform':  `translateY(-${600 - (transform)}px)`}
    : null;
  }

  goTo(id)  {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

  handleScroll() {
  }
}
