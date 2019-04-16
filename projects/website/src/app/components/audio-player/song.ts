import { BehaviorSubject } from "rxjs";
import { BaseModel } from "../../util/model";
import { secondsToHms } from "../../util/convert-time";

export class Song extends BaseModel<Song> {
  public title: string;
  public artist: string;
  public duration: number;
  public file: HTMLAudioElement;

  public playing: boolean;
  public inPlaylist: boolean;

  public loaded = new BehaviorSubject(0);

  public time = {
    elapsedRaw: new BehaviorSubject(0),
    elapsed: new BehaviorSubject("0:00"),
    total: new BehaviorSubject("0:00"),
    totalRaw: new BehaviorSubject(0),
    isPlaying: new BehaviorSubject(false)
  };

  public setElpased(value: number) {
    this.time.elapsed.next(secondsToHms(value));
    this.time.elapsedRaw.next(Math.floor(value));
  }
}
