import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

import { of, Subscription } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LOGO_ANIMATIONS } from './animation';

@Component({
  selector: 'kinam-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: LOGO_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit, OnDestroy {
  public bounce = false;
  public title = false;
  public loadend = false;
  private subscription = new Subscription();

  constructor(private cd: ChangeDetectorRef) { }

  public ngOnInit() {
    this.subscription.add(
      of('hi')
        .pipe(
          delay(500),
          tap(_ => {
            this.loadend = true;
            this.cd.detectChanges();

            this.bounce = !this.bounce;
            this.title = !this.title;
            this.cd.detectChanges();
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'kinam-simple-logo',
  templateUrl: './logo.html',
  styles: [`
    svg {
      fill: #fff;
      width: 2.5rem;
      margin: 0.5rem 1rem;
    }
  `]
})
export class SimpleLogo { }
