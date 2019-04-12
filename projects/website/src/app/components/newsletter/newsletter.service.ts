import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { mergeMap } from 'rxjs/operators';

import { RequestService } from '../../services/request.service';
import { of } from 'rxjs';

const AUDIENCE_ID = '9f2f798292';
const baseUrl = `/api`;
const endPoint = `/3.0/lists/${AUDIENCE_ID}/members/`;

const baseHeaders = new HttpHeaders({
    'Authorization': 'Basic 47e28afcfb03f816add2424df2d46b7c-us20',
});

@Injectable()
export class NewsletterService {
    constructor(
        private requestService: RequestService,
    ) {}

    private _isSubscribed(address: string) {
        return this.requestService.get(
            `${baseUrl}${endPoint}${address}`,
            { headers: baseHeaders },
        );
    }

    public signUp(mailAddress: string) {
        return this._isSubscribed(mailAddress).pipe(
            mergeMap((res) => {
                if (res) {
                    // TODO: check for actual subscription
                    return this.requestService.post(
                        `${baseUrl}${endPoint}`,
                        {
                            'email_address': mailAddress,
                            'status': 'subscribed',
                            // 'merge_fields': {
                            //     'FNAME': 'Urist',
                            //     'LNAME': 'McVankab'
                            // },
                        },
                        null,
                        baseHeaders
                    )
                }
                return of(res);
            })
        );
    }
}
