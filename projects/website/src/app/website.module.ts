import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from 'core';
import { BirthdayModule } from 'ng-maya-birthday';
import { SharedModule } from 'shared';

import { WebsiteComponent } from './app.component';

import { NewsletterModule } from './components/newsletter/newsletter.module';
import { DateInputComponent } from './components/date-input/date-input';
import { SimpleLogo } from './components/logo/logo';
import { MenuComponent } from './components/menu/menu.component';
import { ReadingsModule } from './components/hover-card/readings.module';
import { CmsModule } from './components/cms/cms.module';

import { LoginDialogComponent } from './login-dialog.component';

import { LandingComponent } from './routes/landing/landing.component';
import { PlaybookComponent } from './routes/playbook/playbook.component';

import { DialogComponent } from './services/dialog.service';
import { EntryGuard } from './services/entry-guard';

import { ScrollSnapDirective } from './directives/scroll-snap.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { ProductSliderModule } from "@website/components/product-slider/product-slider.module";
import { ProductComponent } from './routes/product/product.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { MusicComponent } from './routes/music/music.component';
import { MayansComponent } from './routes/mayans/mayans.component';
import { ProjectComponent } from './routes/project/project.component';

import { ProjectComponent1 } from './routes/project/1.component';
import { ProjectComponent2 } from './routes/project/2.component';
import { ProjectComponent3 } from './routes/project/3.component';

import { AboutComponent } from './routes/about/about.component';
import { About1Component } from './routes/about/about1.component';
import { About2Component } from './routes/about/about2.component';
import { About3Component } from './routes/about/about3.component';
import { CalendarComponent } from './routes/calendar/calendar.component';
import { SocialIconsComponent } from './routes/social-icons/social-icons.component';


const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'the-jacket', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about1', component: About1Component },
  { path: 'about2', component: About2Component },
  { path: 'about3', component: About3Component },

  { path: 'calendar', component: CalendarComponent },
  { path: 'music', component: MusicComponent },
  { path: 'the-mayans', component: MayansComponent },
  { path: 'social-projects', component: ProjectComponent },
  { path: 'social-projects-1', component: ProjectComponent1 },
  { path: 'social-projects-2', component: ProjectComponent2 },
  { path: 'social-projects3', component: ProjectComponent3 },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    WebsiteComponent,
    ScrollSnapDirective,
    ScrollDirective,
    SimpleLogo,

    LandingComponent,

    LoginDialogComponent,
    DateInputComponent,
    DialogComponent,
    MenuComponent,
    PlaybookComponent,
    ProductComponent,
    ProductHeaderComponent,
    MusicComponent,
    MayansComponent,
    ProjectComponent,
    ProjectComponent1,
    ProjectComponent2,
    ProjectComponent3,
    AboutComponent,
    About1Component,
    About2Component,
    About3Component,
    CalendarComponent,
    SocialIconsComponent,
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
    ProductSliderModule,
    RouterModule.forRoot(routes, {})
  ],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule { }
