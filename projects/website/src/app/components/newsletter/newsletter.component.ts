import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { NewsletterService } from './newsletter.service';
import { DialogService } from '../../services/dialog.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CmsService } from 'core';

// tslint:disable-next-line: max-line-length
const MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MAIL_VALIDATORS = [
  Validators.pattern(MAIL_REGEX),
  Validators.required
];

export interface KinamError {
  error: string;
  detail: string;
}

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

      <div type="submit button" (click)="submit(emailControl)" class="newsletter-button nowrap">
        {{ (content$ | async)?.label_signup_button || 'Sign up' }}
      </div>
    </form>
  `,
  styleUrls: ['newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent {
  public error: string;
  public emailControl = new FormControl(null, MAIL_VALIDATORS);
  public content$: Observable<any>;


  constructor(
    private newletterService: NewsletterService,
    private dialogService: DialogService,
    private cd: ChangeDetectorRef,
    private cmsService: CmsService,
  ) {

    this.content$ = this.cmsService.getSingleton('newsletter');
  }

  public submit(control: FormControl) {
    if (!control.valid) {
      return;
    }

    this.newletterService.signUp(control.value).subscribe(
      () => {
        this.dialogService.success('Thanks for signing up!');
      },
      ({ detail }) => {
        this.dialogService.error(detail).afterClosed()
          .subscribe(({ invalid }) => {
            this.emailControl.setErrors({ invalid });
            this.cd.detectChanges();
          });
      });
  }
}
