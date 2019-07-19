import { Component, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate, group } from '@angular/animations';

import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LoginDialogComponent } from './login-dialog.component';
import { AbstractMenu } from './components/menu/abstract-menu';
import { TitleService } from './services/title.service';
import { LandingService } from './services';


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
  `]
})
export class WebsiteComponent extends AbstractMenu implements OnInit, OnDestroy, AfterViewInit {
  constructor(public dialog: MatDialog, private titleService: TitleService, landingService: LandingService) {
    super(landingService)
  }
  private subscription = new Subscription();

  public authenticated = false;
  public state = false;

  public ngOnInit() {
    this.titleService.setTitle({ description: 'A Portal to the Mayan World - Fashion. Music. Technology. Support our Crowdfunding!' });
  }

  anim() {
    this.state = !this.state;
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

