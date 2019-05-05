import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from 'core';
import { BirthdayModule } from 'ng-maya-birthday';
import { SharedModule } from 'shared';

import { AppComponent, LoginDialogComponent } from './app.component';

import { MainComponent } from './routes/main/main.component';
import { ScrollDirective } from './routes/main/scroll.directive';
import { NewsletterModule } from './components/newsletter/newsletter.module';
import { CmsParagraphComponent } from './components/cms/cms-paragraph';
import { CmsBlockComponent } from './components/cms/cms-block';
import { CmsImageComponent } from './components/cms/cms-image';
import { NavigationComponent } from './components/navigation/navigation.component';

import { DateInputComponent } from './components/date-input/date-input';
import { LogoComponent } from './components/logo/logo.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { PlaylistComponent } from './components/audio-player/playlist.component';
import { UploadBarComponent } from './components/upload-bar/upload-bar.component';

import { KinamAudioComponent } from './routes/kinam-audio-suite/kinam-audio-suite.component';
import { LandingComponent } from './routes/landing/landing.component';
import { ProductListComponent } from './routes/product/product-list/product-list.component';
import { ProductPageComponent } from './routes/product/product-page/product-page.component';
import { BirthdayDialogComponent } from './components/newsletter/newsletter.service';
import { ErrorDialogComponent } from './services/dialog.service';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'audio', component: KinamAudioComponent },
  {
    path: 'product', children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductPageComponent },
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,

    ProductListComponent,
    ProductPageComponent,
    CmsParagraphComponent,
    CmsBlockComponent,
    CmsImageComponent,

    NavigationComponent,
    KinamAudioComponent,
    LogoComponent,

    AudioPlayerComponent,
    PlaylistComponent,
    UploadBarComponent,
    LandingComponent,

    LoginDialogComponent,
    DateInputComponent,
    ErrorDialogComponent,
  ],
  entryComponents: [LoginDialogComponent, ErrorDialogComponent],
  imports: [
    CoreModule,
    SharedModule,
    BirthdayModule,
    NewsletterModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
