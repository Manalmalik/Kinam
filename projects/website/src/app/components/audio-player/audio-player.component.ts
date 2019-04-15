import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { of, BehaviorSubject, Subscription, Observable } from "rxjs";
import {
  delay,
  tap,
  filter,
  takeWhile,
  distinctUntilKeyChanged
} from "rxjs/operators";
import { AudioService } from "./audio.service";
import { Song } from "./song";
@Component({
  selector: "kinam-audio",
  templateUrl: "./audio-player.component.html",
  styleUrls: ["./audio-player.component.scss"]
})
export class AudioPlayerComponent implements OnInit {
  public elapsed = "1:33";
  public total = "4:41";

  public playlistVisible$ = new BehaviorSubject(false);
  public playerVisible$ = new BehaviorSubject(false);
  public progress: BehaviorSubject<number>;

  public currentSong: BehaviorSubject<Song>;
  public audioFile: Observable<any>;

  constructor(
    private audioService: AudioService,
    private renderer: Renderer2
  ) {}

  private audioRef: ElementRef;
  private progressSub: Subscription;

  ngOnInit(): void {
    of(null)
      .pipe(delay(2000))
      .subscribe(() => this.playerVisible$.next(true));

    this.currentSong = this.audioService.currentSong;

    this.audioService.currentSong
      .pipe(
        filter(x => !!x),
        distinctUntilKeyChanged("title"),
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
            this.audioService.loadSong()
          )
          .subscribe(res => {
            console.log(res);
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

  public togglePlaylist() {
    this.playlistVisible$.next(!this.playlistVisible$.value);
  }
}