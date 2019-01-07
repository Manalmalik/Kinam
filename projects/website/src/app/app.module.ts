import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
