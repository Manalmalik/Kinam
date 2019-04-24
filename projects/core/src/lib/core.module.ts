import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconModule } from './icon.module';
/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    IconModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    IconModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Make sure this module is imported only once.
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
