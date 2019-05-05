import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';

import { NewsletterService, BirthdayDialogComponent } from './newsletter.service';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [SharedModule],
  declarations: [NewsletterComponent, BirthdayDialogComponent],
  exports: [NewsletterComponent, BirthdayDialogComponent],
  providers: [NewsletterService],
  entryComponents: [BirthdayDialogComponent, NewsletterComponent,]
})
export class NewsletterModule { }
