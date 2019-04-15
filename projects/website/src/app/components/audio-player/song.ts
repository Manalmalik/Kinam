import { BehaviorSubject, Observable } from "rxjs";

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
  public duration: number | string;
  public file: HTMLAudioElement;

  public playing: boolean;
  public inPlaylist: boolean;

  public time = {
    elapsed: new BehaviorSubject(0),
    total: new BehaviorSubject(0),
    isPlaying: new BehaviorSubject(false)
  };

  public loaded = new BehaviorSubject(0);
}
