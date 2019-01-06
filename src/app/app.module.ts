import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculatorModule } from './components/calculator/calculator.module';
import { MayaNumberModule } from './components/maya-number/maya-number.module';
import { MayaNumberBlockModule } from './components/maya-number-block/maya-number-block.module';

import { BirthdayModule } from './components/birthday/birthday.module';
import { StorybookModule } from './routes/storybook/storybook.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    BirthdayModule,
    CalculatorModule,
    MayaNumberModule,
    MayaNumberBlockModule,
    StorybookModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
