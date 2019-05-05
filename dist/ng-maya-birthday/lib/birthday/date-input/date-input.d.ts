import { EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Moment } from 'moment';
import { AnimationBuilder } from '@angular/animations';
export declare class DateInputComponent {
    private _builder;
    constructor(_builder: AnimationBuilder);
    open: boolean;
    form: FormGroup;
    dateChange: EventEmitter<Moment>;
    submit(): void;
    private animFactory;
    toggle(el: ElementRef, el2: ElementRef): void;
}
