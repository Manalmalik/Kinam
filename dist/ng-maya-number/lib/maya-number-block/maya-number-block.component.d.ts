import { OnInit } from '@angular/core';
import { MayanDigit } from './maya-number';
import { Observable } from 'rxjs';
export declare class MayaNumberBlockComponent implements OnInit {
    number: number;
    number$: Observable<any>;
    ngOnInit(): void;
    getVal$(number: any): Observable<any>;
    getValFromRow(row: MayanDigit[]): number;
    isSimpleNumber(val: any): boolean;
}
