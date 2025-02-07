import { Component, OnDestroy, AfterViewInit, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate, group } from '@angular/animations';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AbstractMenu } from './components/menu/abstract-menu';
import { LandingService, MetaService } from './services';
import { Router, NavigationStart } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'kinam-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('woo', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ],
  styles: [`
  .logo img {
    margin-top: 1.2rem;
    margin-left: 2rem;
    cursor: pointer;
  }

  .menu-icon {
    width: 6rem;
    margin-top: 40px;
    margin-right: 40px; 
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  @media (min-width: 0) and (max-width: 480px) {  
    .logo img {
      max-width: 8rem;
      margin-top: 1rem;
    }

    .menu-icon {
      width: 4rem;
      margin-top: 1.5rem;
    }
  }
  `]
})
export class WebsiteComponent extends AbstractMenu implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private metaService: MetaService,
    landingService: LandingService,
    private meta: Meta
  ) {
    super(landingService)

  }
  private subscription = new Subscription();
  public currentWindowWidth: number;
  public authenticated = true;
  public state = false;

  anim() {
    this.state = !this.state;
  }

  public ngOnInit() {
    this.metaService.setMeta({
      description: 'To uncover and conserve all the secrets hidden in the jungle of Guatemala and to help the indegnous tribes build a better future for their people',
      image: 'https://kinam.io/assets/wall_bg.jpg',
      title: 'A Portal to the Mayan World.',
      url: `https://kinam.io`
    });

    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(
      () => this.viewportScroller.scrollToPosition([0, 0]),
    )

    this.currentWindowWidth = window.innerWidth;
    
  }

  public ngAfterViewInit(): void {
    // if (!(localStorage.getItem('authenticated') === 'true')) {
    //   of('hi')
    //     .pipe(delay(100))
    //     .subscribe(_ => {
    //       const dialogRef = this.dialog.open(LoginDialogComponent, {
    //         width: '250px'
    //       });

    //       dialogRef.afterClosed().subscribe(result => {
    //         if (result) {
    //           this.authenticated = true;
    //         }
    //       });
    //     });
    // } else {
    //   of('hi')
    //     .pipe(delay(100))
    //     .subscribe(res => {
    //       this.authenticated = true;
    //     });
    // }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }
}

