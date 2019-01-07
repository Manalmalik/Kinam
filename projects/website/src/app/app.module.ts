import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VideoEmbedComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
