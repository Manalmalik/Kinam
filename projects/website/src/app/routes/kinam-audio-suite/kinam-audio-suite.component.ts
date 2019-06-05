import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject, from, Subscription } from 'rxjs';
import {
  HttpClient,
  HttpEventType,
  HttpResponse,
  HttpRequest
} from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';

import { AudioService } from '@website/legacy/audio-player/audio.service';
import { Song } from '@website/legacy/audio-player/song';

@Component({
  selector: 'kinam-audio-suite',
  styleUrls: ['./kinam-audio-suite.component.scss'],
  templateUrl: './kinam-audio-suite.component.html'
})
export class KinamAudioComponent {
  @ViewChild('file') file: ElementRef;

  public progress: BehaviorSubject<number>;
  private subscription = new Subscription();

  constructor(private audioService: AudioService, private http: HttpClient) { }

  public songs$: Observable<Song[]> = this.audioService.songs$.pipe(
    map(s => Array.from(s.values()))
  );

  public addSongToPlaylist(song) {
    if (!this.audioService.isinPlaylist(song)) {
      this.audioService.addSongToPlaylist(song);
      return;
    }
    this.audioService.playlistVisible$.next(true);
  }

  public upload(input: HTMLInputElement) {
    if (!input.files.length) {
      return;
    }

    this.progress = new BehaviorSubject(0);

    const files = this.getRequest(input.files);

    this.subscription.add(this.uploadObservable(files));
  }

  private getRequest(files: FileList) {
    return Array.from(files).map(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const req = new HttpRequest(
        'POST',
        `//167.86.100.47:4201/add`,
        formData,
        {
          reportProgress: true
        }
      );
      return this.http.request(req);
    });
  }

  private uploadObservable(files: Observable<any>[]) {
    return from(files)
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
