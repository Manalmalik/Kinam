import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { KinamNahual } from 'nahual-date';
import { LocalStorageService } from 'core';
export declare class BirthdayComponent implements OnInit {
    private localStorageService;
    date: Date;
    kinamDate: KinamNahual;
    dateCtrl: FormControl;
    loading$: BehaviorSubject<boolean>;
    constructor(localStorageService: LocalStorageService);
    dateConfig: {
        min: Date;
        today: Date;
        startView: 'multi-year' | 'year';
        touchUi: boolean;
    };
    form: FormGroup;
    maxDates: number[];
    ngOnInit(): void;
}
