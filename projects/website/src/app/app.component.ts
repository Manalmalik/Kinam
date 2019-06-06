import { Component, OnDestroy, AfterViewInit } from '@angular/core';

import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate, group } from '@angular/animations';
import { LoginDialogComponent } from './login-dialog.component';
import { LandingService } from './services/landing.service';


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
  ]
})
export class WebsiteComponent implements OnDestroy, AfterViewInit {
  constructor(public dialog: MatDialog, private landingService: LandingService) { }
  private subscription = new Subscription();

  public authenticated = false;
  public state = false;

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

  public toggleMenu() {
    this.landingService.toggleMenu();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

