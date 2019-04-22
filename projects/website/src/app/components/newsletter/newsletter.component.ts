import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { NewsletterService } from './newsletter.service';

const MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
    selector: 'kinam-newsletter',
    template: `
        <form (ngSubmit)="submit(emailControl)">
            <h2 class="subtitle">Get latest updates!</h2>

            <input
                type="email"
                [formControl]="emailControl"
                (click)="invalid = false"
                [class.invalid]="invalid"
                class="newsletter-input"
                placeholder="Your email"
              >
                
            <input 
                type="submit" 
                class="newsletter-button" 
                value="Sign up!"
            >
        </form>
    `,
    styleUrls: ['newsletter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent {

    public invalid = false;
    public emailControl = new FormControl(null, Validators.pattern(MAIL_REGEX));

    constructor(
        private newletterService: NewsletterService
    ) {}

    public submit(control: FormControl) {
        if (!control.valid) {
            this.invalid = true;
            return;
        }

        this.newletterService.signUp(control.value).subscribe(
            res => {},
            err => {}
        );
    }
}
