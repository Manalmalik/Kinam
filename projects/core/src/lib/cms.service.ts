import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = '//cms.kinam13.com/api';
const TOKEN = '770cb5550af4d14fbb43797851fde7';

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
    Yossi = '5cc8c7bb64323600530003b3',
    Yossi2 = '5ccba4d564323600530001ab',
    Vonni = '5ccba4d4643236004300009f',
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

        params.append('token', TOKEN);
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
                    'background-image': `url('${url}')`
                }))
            );
        }
        return this._thumbnail[src];
    }
}
