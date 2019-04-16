import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable } from "rxjs";

import { AudioService } from "./audio.service";
import { Song } from "./song";

@Component({
  selector: "kinam-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistComponent implements OnInit {
  public playing = false;
  public songs: Observable<Song[]>;

  constructor(private audioService: AudioService) {}

  public ngOnInit() {
    this.songs = this.audioService.playlist;
  }

  public play(song: Song) {
    this.audioService.currentSong.next(song);
    this.audioService.playSong(song).subscribe(() => {});
  }

  public downloadFile(song) {
    this.audioService.downloadFile(song);
  }

  public dropped(event: CdkDragDrop<string[]>) {
    const { value } = this.audioService.playlist;
    moveItemInArray(value, event.previousIndex, event.currentIndex);
    this.audioService.playlist.next(value);
  }

  public loadSong(song) {
    this.audioService.currentSong.next(song);
  }

  public togglePlay() {
    this.playing = !this.playing;
  }
}
