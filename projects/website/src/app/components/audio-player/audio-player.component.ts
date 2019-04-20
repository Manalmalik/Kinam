import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { of, BehaviorSubject, Subscription, Observable } from "rxjs";
import {
  delay,
  tap,
  filter,
  takeWhile,
  distinctUntilKeyChanged
} from "rxjs/operators";
import { AudioService, loadSong } from "./audio.service";
import { Song } from "./song";
@Component({
  selector: 'kinam-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioPlayerComponent implements OnInit {
  public elapsed = '1:33';
  public total = '4:41';

  public playlistVisible$: BehaviorSubject<boolean>;
  public playerVisible$ = new BehaviorSubject(false);

  public progress: BehaviorSubject<number>;

  public currentSong: BehaviorSubject<Song>;
  public audioFile: Observable<any>;

  private progressSub: Subscription;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    of(null)
      .pipe(delay(2000))
      .subscribe(() => this.playerVisible$.next(true));

    this.currentSong = this.audioService.currentSong;
    this.playlistVisible$ = this.audioService.playlistVisible$;

    this.audioService.currentSong
      .pipe(
        filter(x => !!x),
        distinctUntilKeyChanged('title'),
        takeWhile(() => !this.progressSub)
      )
      .subscribe(song => {
        this.progress = new BehaviorSubject(0);

        if (!this.currentSong.value) {
          this.currentSong.next(new Song(song));
        }

        this.audioService
          .getSongProgress(song.title)
          .pipe(
            tap(({ progress }) => {
              this.audioService.reportProgress(song.title, progress);
              this.audioService.currentSong.next(this.currentSong.value);
              this.progress.next(progress);
              this.audioService.currentSong.value.loaded.next(progress);
            }),
            loadSong()
          )
          .subscribe(res => {
            this.audioService.updateSong({ file: res }, song.title);
          });
      });
  }

  public togglePlay() {
    const { value } = this.audioService.currentSong;
    if (value) {
      Object.assign({ ...value, ...{ playing: !value.playing } });
    }
  }

  public toggleSlide() {
    const { value } = this.audioService.playlistVisible$;
    this.audioService.playlistVisible$.next(!value);
  }
}
