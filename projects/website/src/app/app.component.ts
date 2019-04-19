import { Component, ChangeDetectionStrategy } from "@angular/core";
import {
  AudioService,
  loadSong
} from "./components/audio-player/audio.service";
import { filter, mergeMap } from "rxjs/operators";
import { Visualizer } from "./routes/landing/visualizer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.songs$
      .pipe(
        filter(x => !!x.length),
        mergeMap(x => this.audioService.getSongProgress(x[1].title)),
        loadSong()
      )
      .subscribe(res => {
        new Visualizer(res.src);
      });
  }
}
