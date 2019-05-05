import { NgModule } from '@angular/core';

import { NewsletterService, BirthdayDialogComponent } from './newsletter.service';
import { NewsletterComponent } from './newsletter.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [SharedModule],
  declarations: [NewsletterComponent, BirthdayDialogComponent],
  exports: [NewsletterComponent, BirthdayDialogComponent],
  providers: [NewsletterService],
  entryComponents: [BirthdayDialogComponent]
})
export class NewsletterModule { }
