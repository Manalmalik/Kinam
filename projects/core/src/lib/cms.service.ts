import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://cms.kinam13.com/api';
const TOKEN = 'd73171e3f4944f45c4d697d5b6f7b9';

export enum AssetCrop {
  Thumbnail = 'thumbnail',
  BestFit = 'bestFit',
  Resize = 'resize',
  FitToWidth = 'fitToWidth',
  FitToHeight = 'fitToHeight',
}


interface Dimension {
  type: 'width' | 'height';
  value: number;
}

export enum AssetId {
  Yossi = '5cd9716464653800280003a0',
  Yossi2 = '5ccba4d564323600530001ab',
  Vonni = '5cd97110646538001a000352'
}


@Injectable({ providedIn: 'root' })
export class CmsService {

  constructor(private http: HttpClient) { }

  private _thumbnail = {};


  public getSingleton(name: string) {
    return this.http.get<any>(`${BASE_URL}/singletons/get/${name}?token=${TOKEN}`);
  }

  public getCollection(name: string): Observable<any> {
    return this.http.post<any>(
      `${BASE_URL}/collections/get/${name}?token=${TOKEN}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          filter: { published: true }
        })
      }
    );
  }

  private _getThumbnail({
    src,
    crop = AssetCrop.Thumbnail,
    dimension = { type: 'width', value: 500 },
    quality = 100
  }: {
    src: AssetId,
    crop?: AssetCrop,
    dimension?: Dimension,
    quality?: number
  }): Observable<string> {

    const params = new URLSearchParams();

    params.append('token', '22e67ea810a180f9c4c6bbf379b8b6');
    params.append('src', src);
    params.append('crop', crop);
    params.append('w', `${dimension.value}`);
    params.append('q', `${quality}`);

    return this.http.get(`${BASE_URL}/cockpit/image?${params}`, { 'responseType': 'text' });
  }


  /**
* Gets a thumbnail url and returns an observable of it
*/
  public getThumbnail(src: AssetId): Observable<{ key: string }> {
    if (!this._thumbnail[src]) {
      this._thumbnail[src] = this._getThumbnail({ src: AssetId[`${src}`] }).pipe(
        map(url => ({
          'background-image': `url('//${url}')`
        }))
      );
    }
    return this._thumbnail[src];
  }
}
