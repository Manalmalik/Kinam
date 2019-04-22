import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from "@angular/core";
import {
  AudioService,
  loadSong
} from "./components/audio-player/audio.service";
import { filter, mergeMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private audioService: AudioService) {}
  private subscription = new Subscription();

  public ngOnInit(): void {
    this.subscription.add(
      this.audioService.songs$
        .pipe(
          filter(x => !!x.length),
          mergeMap(x => this.audioService.getSongProgress(x[1].title)),
          loadSong
        )
        .subscribe(res => {})
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
