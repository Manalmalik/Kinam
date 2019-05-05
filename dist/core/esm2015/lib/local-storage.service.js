/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LocalStorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        /** @type {?} */
        const item = localStorage.getItem(key);
        if (item) {
            if (typeof item === 'string') {
                return item;
            }
        }
    }
}
LocalStorageService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUNyQixHQUFHLENBQUMsR0FBVyxFQUFFLEtBQUs7UUFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSxHQUFHLENBQUMsR0FBVzs7Y0FDWixJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO0lBQ0wsQ0FBQzs7O1lBZEosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==