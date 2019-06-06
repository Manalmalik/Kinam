import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from '@website/login-dialog.component';

@Injectable()
export class EntryGuard implements CanActivate {

    constructor(private dialog: MatDialog) { }

    canActivate() {
        const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));

        return new Promise<boolean>(resolve => {
            if (!isAuthenticated) {
                this.dialog.open(LoginDialogComponent, { disableClose: true })
                    .afterClosed()
                    .subscribe((res: boolean) => {
                        localStorage.setItem('authenticated', `${res}`);
                        resolve(res);
                    });
            }
        });
    }
}
