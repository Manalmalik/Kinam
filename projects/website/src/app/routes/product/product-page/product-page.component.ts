import { AnimationBuilder, style, animate } from '@angular/animations';
import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, Input, ViewEncapsulation, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { blindTextBlock } from './blindtext';

export enum SliderState {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export const upperMaxWidth = window.innerWidth < 768 ? '10rem' : '15rem';
export const upperMaxHeight = window.innerWidth < 768 ? '4rem' : '5rem';
export const maxWidth = `${window.innerWidth}px`;
export const hundredPercent = '100%';
export const innerHeight = `${window.innerHeight}px`;
export const sidebarWidth = '50vw';
export const textMargin = 2; // rem

export const initalState = {
  isCollapsed: true,
  isToggled: true,
};

@Component({
  selector: 'kinam-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  styles: [`

    .text {
      margin: ${textMargin}rem;
      height: calc(100% - ${textMargin * 2}rem);
      overflow: auto;
      font-size: 1rem;
    }

    .lower .text {
      height: calc(100% - ${textMargin * 4}rem);
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductPageComponent implements AfterViewInit, OnInit {
  constructor(private _animator: AnimationBuilder, private route: ActivatedRoute) {

  }

  public img$: Observable<string>;

  @ViewChild('lower') lower: ElementRef;
  @ViewChild('upperLeft') upperLeft: ElementRef;
  @ViewChild('upperRight') upperRight: ElementRef;
  @ViewChild('productText') productText: ElementRef;
  @ViewChild('storyText') storyText: ElementRef;
  @ViewChild('bgImage') bgImage: ElementRef;
  @ViewChild('productImg') productImg: ElementRef;


  public blindTextBlock = blindTextBlock;

  public isLowerCollapsed = new BehaviorSubject({ isCollapsed: initalState.isCollapsed });
  public isToggled$ = new BehaviorSubject({ isToggled: initalState.isToggled });

  private _blocked = false;

  @Input()
  private set _isToggled(is: boolean) {
    this.isToggled$.next({ isToggled: is });
  }

  private get _isToggled() {
    return this.isToggled$.value.isToggled;
  }


  public ngOnInit() {
    this.img$ = this.route.queryParams.pipe(
      map(p => {
        switch (p.img) {
          case 'yossi': return 'http://kinam13.com:8080/storage/uploads/2019/04/30/5cc8c7bb9f67ayossi.jpeg';
          case 'yossi2': return 'http://kinam13.com:8080/storage/uploads/2019/05/03/5ccba4d5922dcyossi2.jpeg';
          case 'vonni': return 'http://kinam13.com:8080/storage/uploads/2019/05/03/5ccba4d435eb8vonni.jpg';
          default: return 'http://kinam13.com:8080/storage/uploads/2019/04/30/5cc8c7bb9f67ayossi.jpeg';
        }
      }),
      tap(img => {
        this.productImg.nativeElement.style.backgroundImage = `url('${img}')`;
      }));
  }


  public ngAfterViewInit() {
    this.lower.nativeElement.style.top = `calc(${innerHeight} - 4rem)`;
    this.bgImage.nativeElement.style.height = innerHeight;
    this.upperLeft.nativeElement.style.width = upperMaxWidth;
    this.upperRight.nativeElement.style.width = upperMaxWidth;
    this.upperLeft.nativeElement.style.maxHeight = upperMaxHeight;
    this.upperRight.nativeElement.style.maxHeight = upperMaxHeight;
    this.upperLeft.nativeElement.style.height = upperMaxHeight;
    this.upperRight.nativeElement.style.height = upperMaxHeight;
    this.productImg.nativeElement.style.height = innerHeight;
  }


  private _getHeight(is: boolean) {
    return is ?
      style({ minHeight: upperMaxHeight })
      : style({ minHeight: innerHeight });
  }

  private _shrinkUpper(isToggled, el: 'right' | 'left') {
    const width = (is: boolean) => is ? upperMaxWidth : window.innerWidth < 768 ? maxWidth : sidebarWidth;
    const anim = this._animator.build([
      style({ width: width(isToggled) }),
      animate('600ms ease-out', style({ width: width(!isToggled) })),
      animate('600ms ease-out', this._getHeight(!isToggled)),
    ]);

    switch (el) {
      case 'left': {
        return anim.create(this.upperLeft.nativeElement);
      }
      case 'right': {
        return anim.create(this.upperRight.nativeElement);
      }
    }
  }

  private _getProductAnimation(isToggled: boolean, callback: () => void) {
    const parent = this._shrinkUpper(isToggled, 'left');

    const textFade = this._textFade('product');

    textFade.onDone(() => {
      parent.play();
      parent.onDone(() => callback());
    });

    textFade.play();

    return textFade;
  }

  public toggleUpperLeft() {
    if (this._blocked) {
      return;
    }
    this._blocked = true;

    const textFade = this._getProductAnimation(this._isToggled, () => {
      this._blocked = false;
      this._isToggled = !this._isToggled;

      if (this._isToggled) {
        this.storyText.nativeElement.style.opacity = '0';
        this.productText.nativeElement.style.opacity = '0';
      }
    });
    const translateLower = this._translateLower();
    const translateUpperRight = this._translateUpper(this._isToggled, 'right');

    translateLower.play();
    translateUpperRight.play();
    textFade.play();
  }

  private _translateUpper(isToggled: boolean, el: 'right' | 'left', factor = 1) {
    const anim = this._animator.build([
      style({ transform: `translateX(${!isToggled ? `${factor * 100}%` : '0'})` }),
      animate('600ms ease-out', style({ transform: `translateX(${isToggled ? `${factor * 100}%` : '0'})` }))
    ]);

    switch (el) {
      case 'right': {
        return anim.create(this.upperRight.nativeElement);
      }
      case 'left': {
        return anim.create(this.upperLeft.nativeElement);
      }
    }
  }

  public get arrowCls$() {
    return this.isLowerCollapsed.pipe(
      map(({ isCollapsed }) => isCollapsed ? 'fal fa-chevron-up' : 'fal fa-chevron-down')
    );
  }

  public expandLower() {
    if (this._blocked) {
      return;
    }
    this._blocked = true;

    const { isCollapsed } = this.isLowerCollapsed.value;

    const toggleLower = this._toggleLower(isCollapsed);
    const upperRight = this._translateUpper(isCollapsed, 'right', 1);
    const upperleft = this._translateUpper(isCollapsed, 'left', -1);

    toggleLower.onDone(() => {
      this._blocked = false;
      this.isLowerCollapsed.next({ isCollapsed: !isCollapsed });
    });
    toggleLower.play();
    upperRight.play();
    upperleft.play();
  }

  public toggleStory() {
    if (this._blocked) {
      return;
    }
    this._blocked = true;

    const lower = this._translateLower();
    const upperLeft = this._translateUpper(this._isToggled, 'left', -1);

    const textFade = this._textFade('story');

    textFade.onDone(() => {
      const shrink = this._shrinkUpper(this._isToggled, 'right');
      shrink.onDone(() => {
        this._blocked = false;
        this._isToggled = !this._isToggled;
        this.storyText.nativeElement.style.opacity = '0';
        this.productText.nativeElement.style.opacity = '0';
      });
      shrink.play();
    });

    textFade.play();
    lower.play();
    upperLeft.play();
  }

  private _translateLower() {
    return this._animator.build([
      style({ transform: `translateY(${!this._isToggled ? hundredPercent : '0'})` }),
      animate('900ms ease-in-out', style({ transform: `translateY(${!!this._isToggled ? hundredPercent : '0'})` }))
    ]).create(this.lower.nativeElement);
  }


  private _toggleLower(isLowerExpanded) {
    return this._animator.build([
      style({ top: !isLowerExpanded ? '0' : `calc(${hundredPercent} - ${upperMaxHeight})` }),
      animate('600ms ease-out', style({ top: isLowerExpanded ? '0' : `calc(${hundredPercent} - ${upperMaxHeight})` }))
    ]).create(this.lower.nativeElement);
  }

  private _textFade(text: 'story' | 'product') {
    switch (text) {
      case 'product': {
        this._animator.build([
          style({ opacity: '0' }),
        ]).create(this.storyText.nativeElement).play();
        this._animator.build([
          style({ opacity: '0' }),
        ]).create(this.productText.nativeElement).play();
        return this._animator.build([
          style({ opacity: this._isToggled ? '0' : '1' }),
          animate('200ms ease-out', style({ opacity: this._isToggled ? '1' : '0' })),
        ]).create(this.productText.nativeElement);
      }
      case 'story': {
        this._animator.build([
          style({ opacity: '0' }),
        ]).create(this.storyText.nativeElement).play();
        this._animator.build([
          style({ opacity: '0' }),
        ]).create(this.productText.nativeElement).play();
        return this._animator.build([
          style({ opacity: this._isToggled ? '0' : '1' }),
          animate('200ms ease-out', style({ opacity: this._isToggled ? '1' : '0' })),
        ]).create(this.storyText.nativeElement);
      }
    }
  }
}
