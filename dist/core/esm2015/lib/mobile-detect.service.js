/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MobileDetectService {
    /**
     * @return {?}
     */
    get isMobile() {
        return !!navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
    }
    /**
     * @return {?}
     */
    get isIOS() {
        /** @type {?} */
        const iDevices = [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ];
        if (!!navigator.platform) {
            while (iDevices.length) {
                if (navigator.platform === iDevices.pop()) {
                    return true;
                }
            }
        }
        return false;
    }
}
MobileDetectService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MobileDetectService.ngInjectableDef = i0.defineInjectable({ factory: function MobileDetectService_Factory() { return new MobileDetectService(); }, token: MobileDetectService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWRldGVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2JpbGUtZGV0ZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUNoQyxrS0FBa0ssQ0FDbkssQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7O2NBQ1IsUUFBUSxHQUFHO1lBQ2YsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsTUFBTTtZQUNOLFFBQVE7WUFDUixNQUFNO1NBQ1A7UUFFRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDekMsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUEzQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVEZXRlY3RTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBpc01vYmlsZSgpIHtcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kfGFkKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfE5ldEZyb250fFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8RmVubmVjfE1pbmltb3xPcGVyYSBNKG9iaXxpbmkpfEJsYXplcnxEb2xmaW58RG9scGhpbnxTa3lmaXJlfFp1bmUvXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNJT1MoKSB7XG4gICAgY29uc3QgaURldmljZXMgPSBbXG4gICAgICAnaVBhZCBTaW11bGF0b3InLFxuICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxuICAgICAgJ2lQb2QgU2ltdWxhdG9yJyxcbiAgICAgICdpUGFkJyxcbiAgICAgICdpUGhvbmUnLFxuICAgICAgJ2lQb2QnXG4gICAgXTtcblxuICAgIGlmICghIW5hdmlnYXRvci5wbGF0Zm9ybSkge1xuICAgICAgd2hpbGUgKGlEZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtID09PSBpRGV2aWNlcy5wb3AoKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=