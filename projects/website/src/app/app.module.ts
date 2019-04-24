import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { BirthdayModule } from 'ng-maya-birthday';

import { AppComponent } from './app.component';
import { MainComponent } from './routes/main/main.component';
import { ScrollDirective } from './routes/main/scroll.directive';
import { NewsletterModule } from './components/newsletter/newsletter.module';
import { CmsParagraphComponent } from './components/cms/paragraph';
import { CmsBlockComponent } from './components/cms/cms-block';
import { CmsImageComponent } from './components/cms/cms-image';
import { NavigationComponent } from './components/navigation/navigation.component';

import { LogoComponent } from './components/logo/logo.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { PlaylistComponent } from './components/audio-player/playlist.component';
import { UploadBarComponent } from './components/upload-bar/upload-bar.component';
import { KinamAudioComponent } from './routes/kinam-audio-suite/kinam-audio-suite.component';
import { LandingComponent } from './routes/landing/landing.component';

import { CoreModule } from 'core';

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
    LandingComponent
  ],
  imports: [CoreModule, BirthdayModule, NewsletterModule, DragDropModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
