import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsletterService } from './newsletter.service';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [NewsletterComponent],
  exports: [NewsletterComponent],
  providers: [NewsletterService]
})
export class NewsletterModule {}
