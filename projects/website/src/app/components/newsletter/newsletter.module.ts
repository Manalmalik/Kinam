import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';

import { NewsletterService, BirthdayDialogComponent } from './newsletter.service';
import { NewsletterComponent } from './newsletter.component';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  imports: [SharedModule, HttpClientJsonpModule],
  declarations: [NewsletterComponent, BirthdayDialogComponent],
  exports: [NewsletterComponent, BirthdayDialogComponent],
  providers: [NewsletterService],
  entryComponents: [BirthdayDialogComponent, NewsletterComponent,]
})
export class NewsletterModule { }
