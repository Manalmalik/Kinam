import { Component, Input, OnInit, Renderer2 } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { AudioService } from "./audio.service";

import { Song } from "./song";
import { Observable } from "rxjs";

@Component({
  selector: "kinam-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  public playing = false;
  public songs: Observable<Song[]>;

  constructor(
    private audioService: AudioService,
    private renderer: Renderer2
  ) {}

  public ngOnInit() {
    this.songs = this.audioService.playlist;
  }

  public play(song: Song) {
    this.audioService.playSong(song).subscribe(res => {
      song.time.elapsed.next(res);
      this.audioService.currentSong.value.time.elapsed.next(res);
    });
  }

  public downloadFile(song) {
    const input = this.renderer.createElement("a");
    input.setAttribute("href", song.file.src);
    input.setAttribute("download", song.title);
    input.click();
  }

  public dropped(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.songs.value, event.previousIndex, event.currentIndex);
  }

  public loadSong(song) {
    this.audioService.currentSong.next(song);
  }

  public togglePlay() {
    this.playing = !this.playing;
  }
}
