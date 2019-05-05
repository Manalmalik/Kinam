import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = 'http://167.86.100.47:8080/api';
const TOKEN = '02289893fa008d75b0ac14cdff5978';

interface Dimension {
  type: 'width' | 'height';
  value: number;
}

export enum AssetId {
  Yossi = '5cc8c7bb64323600530003b3',
  Yossi2 = '5ccba4d564323600530001ab',
  Vonni = '5ccba4d4643236004300009f',
}

export enum AssetCrop {
  Thumbnail = 'thumbnail',
  BestFit = 'bestFit',
  Resize = 'resize',
  FitToWidth = 'fitToWidth',
  FitToHeight = 'fitToHeight',
}

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  constructor(private http: HttpClient) { }

  private _thumbnail = {};


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

    params.append('token', TOKEN);
    params.append('src', src);
    params.append('crop', crop);
    params.append('w', `${dimension.value}`);
    params.append('q', `${quality}`);

    return this.http.get(`${BASE_URL}/cockpit/image?${params}`, { 'responseType': 'text' });
  }

  public get collections(): Observable<any> {
    return this.http
      .get<string[]>(`${BASE_URL}/collections/listCollections?token=${TOKEN}`)
      .pipe(
        mergeMap(names => names.map(name => this.getCollection(name))),
        mergeMap(x => x)
      );
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

  /**
   * Gets a thumbnail url and returns an observable of it
   */
  public getThumbnail(src: AssetId): Observable<{ key: string }> {
    if (!this._thumbnail[src]) {
      this._thumbnail[src] = this._getThumbnail({ src: AssetId[`${src}`] }).pipe(
        map(url => ({
          'background-image': `url('${url}')`
        }))
      );
    }
    return this._thumbnail[src];
  }
}
