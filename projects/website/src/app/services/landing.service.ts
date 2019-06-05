import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from '@website/services/dialog.service';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LandingService {

    constructor(
        private dialogService: DialogService,
        router: Router
    ) {
        router.events.pipe(
            filter(x => x instanceof NavigationStart)
        ).subscribe(
            _ => {
                this.setMenu({ hidden: true });
            }
        );
    }

    private readonly _menuHidden$ = new BehaviorSubject<{ hidden: boolean }>({
        // Initial State
        hidden: true
    });

    public menuHidden$ = this._menuHidden$.asObservable();

    public setMenu({ hidden }) {
        this._menuHidden$.next({ hidden });
    }

    public toggleMenu() {
        const hidden = this._menuHidden$.value.hidden;
        this._menuHidden$.next({ hidden: !hidden });
    }

    public showReadings() {
        this.dialogService.info(`

        This is a mutli line string template literal

        It can do mutliple lines!

        `);
    }
}
