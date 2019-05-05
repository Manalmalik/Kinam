/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var item = localStorage.getItem(key);
        if (item) {
            if (typeof item === 'string') {
                return item;
            }
        }
    };
    LocalStorageService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2NhbC1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7S0FlQzs7Ozs7O0lBYlUsaUNBQUc7Ozs7O0lBQVYsVUFBVyxHQUFXLEVBQUUsS0FBSztRQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVNLGlDQUFHOzs7O0lBQVYsVUFBVyxHQUFXOztZQUNaLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMxQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7SUFDTCxDQUFDOztnQkFkSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBRmxDO0NBaUJDLEFBZkQsSUFlQztTQWRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==