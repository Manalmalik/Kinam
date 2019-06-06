import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from 'core';
import { BirthdayModule } from 'ng-maya-birthday';
import { SharedModule } from 'shared';

import { WebsiteComponent } from './app.component';

import { NewsletterModule } from './components/newsletter/newsletter.module';
import { DateInputComponent } from './components/date-input/date-input';
import { SimpleLogo } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReadingsModule } from './components/hover-card/readings.module';
import { CmsModule } from './components/cms/cms.module';

import { LoginDialogComponent } from './login-dialog.component';

import { LandingComponent } from './routes/landing/landing.component';
import { PlaybookComponent } from './routes/playbook/playbook.component';

import { DialogComponent } from './services/dialog.service';
import { EntryGuard } from './services/entry-guard';

import { ScrollSnapDirective } from './directives/scroll-snap.directive';


const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'playbook', component: PlaybookComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    WebsiteComponent,
    ScrollSnapDirective,

    SimpleLogo,

    LandingComponent,

    LoginDialogComponent,
    DateInputComponent,
    DialogComponent,
    MenuComponent,
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
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule { }
