import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LOGO_ANIMATIONS } from './animation';

@Component({
  selector: 'kinam-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: LOGO_ANIMATIONS,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
  public bounce = false;
  public title = false;
  public loadend = false;

  constructor(private cd: ChangeDetectorRef) {}

  public ngOnInit() {
    of('hi').pipe(
      delay(500),
      tap(res => {
        this.loadend = true;
        this.cd.detectChanges();

        this.bounce = !this.bounce;
        this.title = !this.title;
        this.cd.detectChanges();
      })
    )
    .subscribe();
  }
}
