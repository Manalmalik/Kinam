import { Renderer2, ElementRef, AfterContentInit } from '@angular/core';
export declare class IconDirective implements AfterContentInit {
    private el;
    private renderer;
    name: string;
    centered: boolean;
    customClasses: string[];
    type: string;
    animate: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    private _animateIfSet;
    private _addCustomClasses;
    ngAfterContentInit(): void;
}
