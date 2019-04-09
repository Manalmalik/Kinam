import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BirthdayModule } from 'ng-maya-birthday';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { ScrollDirective } from './routes/main/scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { NewsletterModule } from './components/newsletter/newsletter.module';
import { CmsParagraphComponent } from './components/cms/paragraph';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,
    CmsParagraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BirthdayModule,
    HttpClientModule,
    NewsletterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
