import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';



@Component({
    selector: 'kinam-error-dialog',
    template: `
      <h1 mat-dialog-title>Huh...</h1>
      <div mat-dialog-content>
        {{ data.error }}
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onSubmit()" cdkFocusInitial>
          Ok
        </button>
      </div>
    `
})
export class ErrorDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
    }

    public form = new FormControl();

    onSubmit(): void {
        this.dialogRef.close({ invalid: true });
    }
}

@Injectable({ providedIn: 'root' })
export class DialogService {

    private _dialogRef: MatDialogRef<ErrorDialogComponent>;

    constructor(private dialog: MatDialog) { }

    public error(error: string): MatDialogRef<ErrorDialogComponent> {
        this._dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: { error },
            width: '240px'
        });
        return this._dialogRef;
    }
}
