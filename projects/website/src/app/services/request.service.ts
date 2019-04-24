import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { memoize } from 'decko';
import { Observable } from 'rxjs';

interface RequestOpts {
  params?: HttpParams;
  headers?: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  @memoize
  public get(url: string, opts?: RequestOpts): Observable<any> {
    return this.http.get(url, {
      params: opts.params,
      headers: opts.headers
    });
  }

  public post(
    url: string,
    body: any,
    params?,
    headers?: HttpHeaders
  ): Observable<any> {
    params = this.getParams(params);
    return this.http.post(url, body, {
      params,
      headers
    });
  }

  private getParams(params: any): null | HttpParams {
    if (!params) {
      return null;
    }
    if (params instanceof HttpParams) {
      return params;
    }
    return new HttpParams({ fromObject: params });
  }
}
