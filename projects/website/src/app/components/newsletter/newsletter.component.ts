import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { NewsletterService } from './newsletter.service';
import { DialogService } from '../../services/dialog.service';

const MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'kinam-newsletter',
  template: `
    <form (ngSubmit)="submit(emailControl)">
      <input
        type="email"
        [formControl]="emailControl"
        class="newsletter-input"
        placeholder="Your email"
      />

      <div type="submit button" (click)="submit(emailControl)" class="newsletter-button">
      Sign up!
     <!-- <i class="fal fa-envelope-open"></i> -->
      </div>
    </form>
  `,
  styleUrls: ['newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent {
  public error: string;
  public emailControl = new FormControl(null, [
    Validators.pattern(MAIL_REGEX),
    Validators.required
  ]);

  constructor(private newletterService: NewsletterService, private dialogService: DialogService, private cd: ChangeDetectorRef) { }

  public submit(control: FormControl) {
    if (!control.valid) {
      return;
    }

    this.newletterService.signUp(control.value).subscribe(
      res => {

      },
      ({ error }) => {
        if (error.status === 400) {
          let errorMsg;
          switch (error.title) {
            case 'Member Exists': {
              errorMsg = 'We already signed this email up.';
              break;
            }
            default: {
              errorMsg = error.detail;
              break;
            }
          }
          this.dialogService.error(errorMsg).afterClosed()
            .subscribe(({ invalid }) => {
              this.emailControl.setErrors({ invalid });
              this.cd.detectChanges();
            });
        }
      });
  }
}
