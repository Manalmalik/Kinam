import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const BASE_URL = 'http://167.86.100.47:8080/api';
const TOKEN = '02289893fa008d75b0ac14cdff5978';

interface Collection {
  foo;
}

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  constructor(private http: HttpClient) {}

  public get collections() {
    return this.http
      .get<string[]>(`${BASE_URL}/collections/listCollections?token=${TOKEN}`)
      .pipe(
        mergeMap(names => names.map(name => this.getCollection(name))),
        mergeMap(x => x)
      );
  }

  public getCollection(name: string): Observable<any> {
    return this.http.post<Collection>(
      `${BASE_URL}/collections/get/${name}?token=${TOKEN}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          filter: { published: true }
        })
      }
    );
  }
}
