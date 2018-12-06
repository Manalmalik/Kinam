import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculatorModule } from './components/calculator/calculator.module';
import { MayaNumberModule } from './components/maya-number/maya-number.module';
import { MayaNumberBlockModule } from './components/maya-number-block/maya-number-block.module';

import { BirthdayModule } from './components/birthday/birthday.module';
import { StorybookModule } from './routes/storybook/storybook.module';
import { PresentationModule } from './modules/presentation/presentation.module';

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
    PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
