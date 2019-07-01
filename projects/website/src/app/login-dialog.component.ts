import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import * as md5 from 'js-md5';

const hashed = '9cc193592428c5de4ed32e2080fe2b2c';

@Component({
    selector: 'kinam-login-dialog',
    template: `
    <h1 mat-dialog-title>Enter Password</h1>
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
  `,
  styles: [`
    h1 { color: black }
  `]
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
