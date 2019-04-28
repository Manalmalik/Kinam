import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import {
  map,
  filter,
  tap,
  distinctUntilKeyChanged,
  mergeMap,
  mergeMapTo,
  takeWhile
} from 'rxjs/operators';
import { BehaviorSubject, pipe, fromEvent, interval } from 'rxjs';

import { Song } from './song';
import { secondsToHms } from '../../util/convert-time';

export const AUDIO_SERVER = '//167.86.100.47:4201';

export const getDownloadProgress = pipe(
  map((res: any) => ({
    ...res,
    progress:
      res.loaded && res.total ? Math.round((100 * res.loaded) / res.total) : 0
  }))
);

export const loadSong = () =>
  pipe(
    filter((req: any) => req.type && req.type === HttpEventType.Response),
    map(res => res.body),
    mergeMap(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return fromEvent(reader, 'loadend').pipe(
        map(event => new Audio(event.target['result']))
      );
    })
  );

@Injectable({ providedIn: 'root' })
export class AudioService {
  public playlist = new BehaviorSubject<Song[]>([]);
  public playlistVisible$ = new BehaviorSubject(false);
  public currentSong$ = new BehaviorSubject<Song>(null);
  private renderer: Renderer2;

  constructor(private http: HttpClient, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.http
      .get(`${AUDIO_SERVER}/listSongs`)
      .pipe(map((res: string[]) => res.map(song => new Song({ title: song }))))
      .subscribe(res => {
        this.songs$.next(res);
      });
  }

  public songs$ = new BehaviorSubject<Song[]>([]);

  public addSongToPlaylist(song: Song) {
    if (this.isinPlaylist(song)) {
      return;
    }

    const { title } = song;

    const [found] = this.songs$.value.filter(s => s.title === title);
    found.update({ inPlaylist: true });

    this.playlist.next([
      ...this.playlist.value.filter(s => s.title !== title),
      found
    ]);
  }

  public playSong(song: Song) {
    song.file.play();
    let previousTime = 0;
    const { value } = this.currentSong$;
    const { time } = value;
    time.totalRaw.next(song.file.duration);
    time.total.next(secondsToHms(song.file.duration));
    time.isPlaying.next(true);

    return fromEvent(song.file, 'playing').pipe(
      mergeMapTo(interval(1000)),
      takeWhile(_ => previousTime <= song.file.currentTime),
      tap(_ => {
        const { currentTime } = song.file;
        previousTime = currentTime;

        if (currentTime >= time.totalRaw.value) {
          time.isPlaying.next(false);
        }

        value.setElpased(currentTime);
      }),
      map(_ => ({
        hms: secondsToHms(song.file.currentTime),
        seconds: song.file.currentTime
      })),
      takeWhile(({ seconds }) => !!(seconds <= song.file.duration))
    );
  }

  public downloadFile(song) {
    const input = this.renderer.createElement('a');
    input.setAttribute('href', song.file.src);
    input.setAttribute('download', song.title);
    input.click();
  }

  public isinPlaylist(song: Song) {
    return !!this.playlist.value.find(s => s.title === song.title);
  }

  public updateSong(opts: Partial<Song>, title) {
    const found = this.playlist.value.find(s => s.title === title);

    if (found) {
      found.update(opts);
    }

    this.playlist.next([
      ...this.playlist.value.filter(s => s.title !== title),
      found
    ]);
  }

  public reportProgress(title, progress) {
    const found = this.songs$.value.find(s => s.title === title);

    if (found) {
      found.loaded.next(progress);
    }
  }

  private progressRequest({ method = 'GET', url }) {
    const req = new HttpRequest(method, url, {
      reportProgress: true,
      responseType: 'blob'
    });

    return this.http.request(req).pipe(
      getDownloadProgress,
      distinctUntilKeyChanged('progress')
    );
  }

  public getSongProgress(name) {
    return this.progressRequest({
      url: `${AUDIO_SERVER}/get/${name}`
    });
  }
}
