import { Injectable, Component, Inject, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { filter, concatMapTo, map, catchError, mergeMap, concatMap } from 'rxjs/operators';

import { LocalStorageService } from 'core';

import { CmsService } from 'core';
import { RequestService } from '@website/services';
import { Observable, of, throwError } from 'rxjs';



import { environment } from '../../../environments/environment';
import { KinamError } from './newsletter.component';

const AUDIENCE_ID = '9f2f798292';
const baseUrl = environment.production ? '' : `/api`;
const endPoint = `https://us20.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`;
const hackyEndpoint = `https://kinam13.us20.list-manage.com/subscribe/post-json?u=386f3f96b79f08d1be2943736&amp;id=${AUDIENCE_ID}`;
const baseHeaders = new HttpHeaders({
  Authorization: 'Basic 47e28afcfb03f816add2424df2d46b7c-us20'
});

const BIRTHDAY_TOKEN = 'birthday';

@Component({
  selector: 'kinam-email-dialog',
  // <ng-container *ngIf="content$ | async as content">
  template: `
      <h1 mat-dialog-title>{{content?.title_before_signup}}</h1>
      <div mat-dialog-content>
        <div>
          <p [innerHTML]="content?.text_before_signup || 'Before you sign up'">
          </p>

          <div style="margin: 2rem 0;" *ngIf="bday; else noBday">
            <p [innerHTML]="content?.question_before_signup || 'sure?'">
            </p>
          <br>
          <strong class="has-text-black">{{ bday.toLocaleDateString() }}</strong>
          </div>
        </div>
      </div>
      <div mat-dialog-actions>
        <button *ngIf="bday" mat-button (click)="onSubmit()" cdkFocusInitial>
          Ok
        </button>

        <button mat-button (click)="close()">
          Cancel
        </button>
      </div>
      <ng-template #noBday>
      <div style="margin: 2rem 0;">
      <strong class="has-text-black">
      {{content?.text_missing_birthday}}
      </strong>
      </div>
      </ng-template>
      `
  // </ng-container>
})
export class BirthdayDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BirthdayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private cmsService: CmsService,
  ) { }

  public bday: Date;

  public form = new FormControl();

  public content$: Observable<any>;
  public content: any;

  ngOnInit() {
    this.content$ = this.cmsService.getSingleton('newsletter');
    const bday = localStorage.getItem(BIRTHDAY_TOKEN);
    if (bday) {
      this.bday = new Date(bday);
    }
  }

  close() {
    this.dialogRef.close({ confirmed: false });
  }

  onSubmit(): void {
    this.dialogRef.close({ confirmed: true });
  }
}

@Injectable()
export class NewsletterService {
  constructor(private requestService: RequestService,
    public dialog: MatDialog, private localStorageService: LocalStorageService, private http: HttpClient) { }

  public signUp(mailAddress: string) {
    const dialogRef = this.dialog.open(BirthdayDialogComponent, {
      width: '320px'
    });


    const bday = localStorage.getItem(BIRTHDAY_TOKEN);
    const params = new HttpParams()
      .set('EMAIL', mailAddress)
      .set('CUSTOMBDAY', bday);

    return dialogRef.afterClosed().pipe(
      filter(res => !!res.confirmed),
      concatMapTo(this.http.jsonp(
        `${hackyEndpoint}&${params.toString()}`,
        'c'
      )),
      concatMap((res: any) => {
        if (res.result === 'error') {
          const err: KinamError = { error: 'Singup Error', detail: res.msg };
          return throwError(err);
        }
        return of(res);
      }),
    );
  }
}
