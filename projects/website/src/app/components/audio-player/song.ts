import { BehaviorSubject } from "rxjs";
import { secondsToHms } from "./audio.service";

export class BaseModel<T> {
  constructor(opts?: Partial<T>) {
    Object.assign(this, opts);
  }
  update(opts: Partial<T>) {
    return Object.assign(this, opts);
  }
}

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
