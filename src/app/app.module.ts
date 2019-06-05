import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'shared';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { PlaybookComponent } from './routes/playbook/playbook.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, PlaybookComponent],
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
