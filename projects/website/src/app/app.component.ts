import { Component, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate, group } from '@angular/animations';

import { Subscription, of } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { LoginDialogComponent } from './login-dialog.component';
import { AbstractMenu } from './components/menu/abstract-menu';
import { LandingService, MetaService } from './services';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
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

  public authenticated = false;
  public state = false;

  anim() {
    this.state = !this.state;
  }

  public ngOnInit() {

    this.metaService.removeMeta();

    this.meta.addTag({ name: 'description', content: `To uncover and conserve all the secrets hidden in the jungle of Guatemala and to help the indegnous tribes build a better future for their peopleTo uncover and conserve all the secrets hidden in the jungle of Guatemala and to help the indegnous tribes build a better future for their peopleTo uncover and conserve all the secrets hidden in the jungle of Guatemala and to help the indegnous tribes build a better future for their people` });
    this.meta.addTag({ name: 'image', content: 'https://kinam13.com/assets/wall_bg.jpg' });

    this.meta.addTag({ name: 'og:title', content: 'A Portal to the Mayan World.' });
    this.meta.addTag({ name: 'og:image', content: 'https://kinam13.com/assets/wall_bg.jpg' });
    this.meta.addTag({ name: 'og:description', content: `To uncover and conserve all the secrets hidden in the jungle of Guatemala and to help the indegnous tribes build a better future for their people` });
    this.meta.addTag({ name: 'og:url', content: `https://kinam13.com/the-mayans` });
    this.meta.addTag({ name: 'og:type', content: `website` });

    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(
      () => {
        this.viewportScroller.scrollToPosition([0, 0]);
        this.metaService.removeMeta();
      },
    )
  }

  public ngAfterViewInit(): void {
    if (!(localStorage.getItem('authenticated') === 'true')) {
      of('hi')
        .pipe(delay(100))
        .subscribe(_ => {
          const dialogRef = this.dialog.open(LoginDialogComponent, {
            width: '250px'
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.authenticated = true;
            }
          });
        });
    } else {
      of('hi')
        .pipe(delay(100))
        .subscribe(res => {
          this.authenticated = true;
        });
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

