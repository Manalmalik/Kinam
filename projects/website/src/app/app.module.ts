import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { BirthdayModule } from 'ng-maya-birthday';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDirective } from './routes/main/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoEmbedComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
    BirthdayModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
