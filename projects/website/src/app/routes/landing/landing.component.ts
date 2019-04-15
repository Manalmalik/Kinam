import { Component, ViewChild, ElementRef } from "@angular/core";
import { CmsService } from "../../services/cms.service";
import { Song } from "../../components/audio-player/song";
import {
  AudioService,
  AUDIO_SERVER
} from "../../components/audio-player/audio.service";
import { Observable, BehaviorSubject, from } from "rxjs";
import {
  HttpClient,
  HttpEventType,
  HttpResponse,
  HttpRequest
} from "@angular/common/http";
import { concatMap, map } from "rxjs/operators";

const src = "https://cdn.buttercms.com/V6D8FCrKTfiefKevP1WH";

@Component({
  selector: "kinam-landing",
  styleUrls: ["../main/main.component.scss", "./landing.component.scss"],
  templateUrl: "./landing.component.html"
})
export class LandingComponent {
  @ViewChild("file") file: ElementRef;

  public progress: BehaviorSubject<number>;

  constructor(
    private cmsService: CmsService,
    private audioService: AudioService,
    private http: HttpClient
  ) {
    this.cmsService.collections.subscribe(res => {});
  }

  public songs$: Observable<Song[]> = this.audioService.songs$.pipe(
    map(s => Array.from(s.values()))
  );

  public addSongToPlaylist(song) {
    this.audioService.addSongToPlaylist(song);
  }

  public upload(input: HTMLInputElement) {
    if (!input.files.length) {
      return;
    }

    this.progress = new BehaviorSubject(0);

    const files = Array.from(input.files).map(file => {
      const formData: FormData = new FormData();
      formData.append("file", file, file.name);
      const req = new HttpRequest(
        "POST",
        `//167.86.100.47:4201/add`,
        formData,
        {
          reportProgress: true
        }
      );
      return this.http.request(req);
    });

    from(files)
      .pipe(concatMap(s => s))
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round((100 * event.loaded) / event.total);
          this.progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          this.progress = null;
        }
      });
  }
}
