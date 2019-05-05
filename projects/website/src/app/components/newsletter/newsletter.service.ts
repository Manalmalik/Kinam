import { Injectable, Component, Inject, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { filter, concatMapTo } from 'rxjs/operators';

import { LocalStorageService } from 'core';

import { RequestService } from '../../services/request.service';

const AUDIENCE_ID = '9f2f798292';
const baseUrl = `/api`;
const endPoint = `https://us20.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`;

const baseHeaders = new HttpHeaders({
  Authorization: 'Basic 47e28afcfb03f816add2424df2d46b7c-us20'
});

const BIRTHDAY_TOKEN = 'birthday';

@Component({
  selector: 'kinam-email-dialog',
  template: `
    <h1 mat-dialog-title>Before we sign you up.</h1>
    <div mat-dialog-content>
      <div>
        In order to personalize your Kinam jacket with your Nahual we need your birthday.

        <div style="margin: 2rem 0;" *ngIf="bday; else noBday">
        Is this your birthday? <br>
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
          Enter your birthday in the Nahual Calendar.
        </strong>
      </div>
    </ng-template>
  `
})
export class BirthdayDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BirthdayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  public bday: Date;

  public form = new FormControl();

  ngOnInit() {
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
  constructor(private requestService: RequestService, public dialog: MatDialog, private localStorageService: LocalStorageService) { }

  private _isSubscribed(address: string) {
    return this.requestService.get(`${endPoint}${address}`, {
      headers: baseHeaders
    });
  }

  public signUp(mailAddress: string) {
    // TODO: check for existing subscription
    const dialogRef = this.dialog.open(BirthdayDialogComponent, {
      width: '320px'
    });

    const bday = localStorage.getItem(BIRTHDAY_TOKEN);
    return dialogRef.afterClosed().pipe(
      filter(res => !!res.confirmed),
      concatMapTo(this.requestService.post(
        `${baseUrl}${endPoint}`,
        {
          email_address: mailAddress,
          status: 'subscribed',
          'merge_fields': {
            'CUSTOMBDAY': bday
          },
        },
        null,
        baseHeaders
      ))
    );
  }
}
