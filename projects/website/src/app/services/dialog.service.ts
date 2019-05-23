import { Injectable, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kinam-dialog',
  template: `
    <h1 mat-dialog-title>{{data.title}}</h1>
    <div mat-dialog-content>
      {{ data.data }}
      <br>
      <ng-content></ng-content>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onSubmit()" cdkFocusInitial>
        Ok
      </button>
    </div>
  `
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, data: string }
  ) {
  }

  public form = new FormControl();

  onSubmit(): void {
    this.dialogRef.close({ invalid: true });
  }
}

@Injectable({ providedIn: 'root' })
export class DialogService {

  private _dialogRef: MatDialogRef<DialogComponent>;

  constructor(private dialog: MatDialog) { }

  public success(message: string): MatDialogRef<DialogComponent> {
    if (this._dialogRef) {
      this._dialogRef.close();
    }
    this._dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Yay!...', data: message },
      width: '240px'
    });
    return this._dialogRef;
  }

  public error(error: string): MatDialogRef<DialogComponent> {
    this._dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Huh...', data: error },
      width: '240px'
    });
    return this._dialogRef;
  }

  public info(data: any): MatDialogRef<DialogComponent> {
    this._dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Infos', data },
    });
    return this._dialogRef;
  }
}
