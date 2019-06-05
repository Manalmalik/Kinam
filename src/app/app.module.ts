import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'shared';

/**
 * IMPORTANT:
 * This module is the root module
 * But it is not in use for building the actual website
 */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
