/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MobileDetectService = /** @class */ (function () {
    function MobileDetectService() {
    }
    Object.defineProperty(MobileDetectService.prototype, "isMobile", {
        get: /**
         * @return {?}
         */
        function () {
            return !!navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileDetectService.prototype, "isIOS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var iDevices = [
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
        },
        enumerable: true,
        configurable: true
    });
    MobileDetectService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MobileDetectService.ngInjectableDef = i0.defineInjectable({ factory: function MobileDetectService_Factory() { return new MobileDetectService(); }, token: MobileDetectService, providedIn: "root" });
    return MobileDetectService;
}());
export { MobileDetectService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWRldGVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2JpbGUtZGV0ZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7S0E0QkM7SUExQkMsc0JBQVcseUNBQVE7Ozs7UUFBbkI7WUFDRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FDaEMsa0tBQWtLLENBQ25LLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFLOzs7O1FBQWhCOztnQkFDUSxRQUFRLEdBQUc7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsTUFBTTtnQkFDTixRQUFRO2dCQUNSLE1BQU07YUFDUDtZQUVELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hCLE9BQU8sUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDekMsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7O2dCQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBRmxDO0NBOEJDLEFBNUJELElBNEJDO1NBM0JZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVEZXRlY3RTZXJ2aWNlIHtcbiAgcHVibGljIGdldCBpc01vYmlsZSgpIHtcbiAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kfGFkKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfE5ldEZyb250fFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8RmVubmVjfE1pbmltb3xPcGVyYSBNKG9iaXxpbmkpfEJsYXplcnxEb2xmaW58RG9scGhpbnxTa3lmaXJlfFp1bmUvXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNJT1MoKSB7XG4gICAgY29uc3QgaURldmljZXMgPSBbXG4gICAgICAnaVBhZCBTaW11bGF0b3InLFxuICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxuICAgICAgJ2lQb2QgU2ltdWxhdG9yJyxcbiAgICAgICdpUGFkJyxcbiAgICAgICdpUGhvbmUnLFxuICAgICAgJ2lQb2QnXG4gICAgXTtcblxuICAgIGlmICghIW5hdmlnYXRvci5wbGF0Zm9ybSkge1xuICAgICAgd2hpbGUgKGlEZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtID09PSBpRGV2aWNlcy5wb3AoKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=