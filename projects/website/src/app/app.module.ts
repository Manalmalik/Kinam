import { NgModule } from '@angular/core';

import { BirthdayModule } from 'ng-maya-birthday';
import { CoreModule } from 'core';

import { AppComponent, LoginDialogComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { ScrollDirective } from './routes/main/scroll.directive';
import { NewsletterModule } from './components/newsletter/newsletter.module';
import { CmsParagraphComponent } from './components/cms/paragraph';
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

import { SharedModule } from 'shared';
import { GetReadingComponent } from './components/hover-card/hover-card';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,

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
    GetReadingComponent
    // MayaNumberBlockComponent/
  ],
  entryComponents: [LoginDialogComponent],
  imports: [CoreModule, SharedModule, BirthdayModule, NewsletterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
