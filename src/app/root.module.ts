import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from 'shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * IMPORTANT:
 * This module is the root module
 * But it is not in use for building the actual website which is a project itself
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
export class RootModule { }
