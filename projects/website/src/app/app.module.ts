import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CoreModule } from 'core';
import { BirthdayModule } from 'ng-maya-birthday';
import { SharedModule } from 'shared';

import { AppComponent } from './app.component';

import { NewsletterModule } from './components/newsletter/newsletter.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DateInputComponent } from './components/date-input/date-input';
import { LogoComponent, SimpleLogo } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReadingsModule } from './components/hover-card/readings.module';
import { CmsModule } from './components/cms/cms.module';

import { MainComponent } from './routes/main/main.component';
import { ScrollDirective } from './routes/main/scroll.directive';
import { KinamAudioComponent } from './routes/kinam-audio-suite/kinam-audio-suite.component';
import { LandingComponent } from './routes/landing/landing.component';
import { ProductListComponent } from './routes/product/product-list/product-list.component';
import { ProductPageComponent } from './routes/product/product-page/product-page.component';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { PlaybookComponent } from './routes/playbook/playbook.component';

import { DialogComponent } from './services/dialog.service';

import { LoginDialogComponent } from './login-dialog.component';
import { ScrollSnapDirective } from 'src/app/directives/scroll-snap.directive';



@Injectable()
export class EntryGuard implements CanActivate {

  constructor(private dialog: MatDialog) { }

  canActivate() {
    const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));

    return new Promise<boolean>(resolve => {
      if (!isAuthenticated) {
        this.dialog.open(LoginDialogComponent, { disableClose: true })
          .afterClosed()
          .subscribe((res: boolean) => {
            localStorage.setItem('authenticated', `${res}`);
            resolve(res);
          });
      }
    });
  }
}

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'playbook', component: PlaybookComponent },
  { path: 'calendar', component: CalendarComponent },
  {
    path: 'product', children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductPageComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,
    ScrollSnapDirective,

    ProductListComponent,
    ProductPageComponent,

    NavigationComponent,
    KinamAudioComponent,
    LogoComponent,
    SimpleLogo,

    LandingComponent,

    LoginDialogComponent,
    DateInputComponent,
    DialogComponent,
    MenuComponent,
    CalendarComponent,
    PlaybookComponent,
  ],
  providers: [EntryGuard],
  entryComponents: [LoginDialogComponent, DialogComponent],
  imports: [
    CmsModule,
    CoreModule,
    SharedModule,
    BirthdayModule,
    NewsletterModule,
    ReadingsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
