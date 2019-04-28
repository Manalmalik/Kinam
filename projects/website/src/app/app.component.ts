import { Component, OnDestroy, Inject, AfterViewInit } from '@angular/core';

import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import * as md5 from 'js-md5';
const hashed = '9cc193592428c5de4ed32e2080fe2b2c';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy, AfterViewInit {
  constructor(public dialog: MatDialog) {}
  private subscription = new Subscription();

  public authenticated = false;

  public ngAfterViewInit(): void {
    if (!(localStorage.getItem('authenticated') === 'true')) {
      of('hi')
        .pipe(delay(100))
        .subscribe(_ => {
          const dialogRef = this.dialog.open(LoginDialogComponent, {
            width: '250px'
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.authenticated = true;
            }
          });
        });
    } else {
      of('hi')
        .pipe(delay(100))
        .subscribe(res => {
          this.authenticated = true;
        });
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

@Component({
  selector: 'kinam-login-dialog',
  template: `
    <h1 mat-dialog-title>Hi!</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <input matInput [formControl]="form" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onSubmit()" cdkFocusInitial>
        Ok
      </button>
    </div>
  `
})
export class LoginDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.data = '';
  }

  public form = new FormControl();

  onSubmit(): void {
    if (this.form.value && md5(`${this.form.value}`.toLowerCase()) === hashed) {
      this.dialogRef.close(true);
      localStorage.setItem('authenticated', 'true');
    }
  }
}
