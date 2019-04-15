import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BirthdayModule } from "ng-maya-birthday";

import { AppComponent } from "./app.component";
import { MainComponent } from "./routes/main/main.component";
import { ScrollDirective } from "./routes/main/scroll.directive";
import { HttpClientModule } from "@angular/common/http";
import { NewsletterModule } from "./components/newsletter/newsletter.module";
import { CmsParagraphComponent } from "./components/cms/paragraph";
import { CmsBlockComponent } from "./components/cms/cms-block";
import { CmsImageComponent } from "./components/cms/cms-image";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LandingComponent } from "./routes/landing/landing.component";
import { LogoComponent } from "./components/logo/logo.component";
import { AudioPlayerComponent } from "./components/audio-player/audio-player.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PlaylistComponent } from "./components/audio-player/playlist.component";
import { UploadBarComponent } from "./components/upload-bar/upload-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollDirective,

    CmsParagraphComponent,
    CmsBlockComponent,
    CmsImageComponent,

    NavigationComponent,
    LandingComponent,
    LogoComponent,

    AudioPlayerComponent,
    PlaylistComponent,
    UploadBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BirthdayModule,
    HttpClientModule,
    NewsletterModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
