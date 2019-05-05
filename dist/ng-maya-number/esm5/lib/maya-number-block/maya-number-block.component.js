/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MayanDigits, getMayanNumber } from './maya-number';
import { of, Observable, defer } from 'rxjs';
import { map } from 'rxjs/operators';
import { memoize } from 'decko';
var MayaNumberBlockComponent = /** @class */ (function () {
    function MayaNumberBlockComponent() {
    }
    /**
     * @return {?}
     */
    MayaNumberBlockComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} number
     * @return {?}
     */
    MayaNumberBlockComponent.prototype.getVal$ = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        var _this = this;
        return defer(function () { return of(number); }).pipe(map(function (res) { return getMayanNumber(res); }), map(function (res) { return res.map(function (x) { return x.filter(function (y) { return y.length; }); }); }), map(function (block) {
            return {
                numeric: block.map(function (x) {
                    return x.map(function (y) { return _this.getValFromRow(y); }).reduce(function (acc, val) { return acc + val; }, 0);
                }),
                block: block,
                inner: block.map(function (x) { return ({
                    mayan: x,
                    numeric: x.map(_this.getValFromRow)
                }); })
            };
        }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MayaNumberBlockComponent.prototype.getValFromRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return row.reduce(function (acc, value) {
            switch (value) {
                case MayanDigits.Five: {
                    return acc + 5;
                }
                case MayanDigits.One: {
                    return acc + 1;
                }
                default:
                    return acc;
            }
        }, 0);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MayaNumberBlockComponent.prototype.isSimpleNumber = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (!val.length) {
            return true;
        }
        return typeof val === 'string';
    };
    MayaNumberBlockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kinam-maya-number-block',
                    template: "<div *ngIf=\"getVal$(number) | async as numberBlock\" class=\"number-container\">\n  <section\n    *ngFor=\"let blockRow of numberBlock.block; let i = index\"\n    class=\"maya-number-block\"\n  >\n    <div\n      *ngFor=\"let numberRow of blockRow; let j = index\"\n      class=\"number-row\"\n      [class.inline-numbers]=\"\n        numberBlock.inner[i].numeric[j] < 5 &&\n        numberBlock.inner[i].numeric[j] > 1\n      \"\n      [class.justify-content-center]=\"numberBlock.numeric[i] === 2\"\n    >\n      <kinam-maya-number\n        *ngFor=\"let glyph of numberRow\"\n        [number]=\"glyph\"\n      ></kinam-maya-number>\n    </div>\n  </section>\n</div>\n<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:.75rem 1.5rem;color:#fff}.number-container{border-radius:.5rem;background:#000}.maya-number-block{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;width:7.5rem;max-height:7rem;min-height:4rem;padding:.5rem .25rem;box-sizing:content-box}@media screen and (min-width:0px) and (max-width:480px){.maya-number-block{margin:.5rem;max-width:4.5rem}:host{margin:.5rem}}.inline-numbers{display:flex;justify-content:space-between;flex-direction:row;width:6rem}@media only screen and (max-width:600px){.number-row{width:4.75rem}}.number-row{text-align:center}.justify-content-center{justify-content:center}"]
                }] }
    ];
    MayaNumberBlockComponent.propDecorators = {
        number: [{ type: Input }]
    };
    tslib_1.__decorate([
        memoize,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], MayaNumberBlockComponent.prototype, "getVal$", null);
    return MayaNumberBlockComponent;
}());
export { MayaNumberBlockComponent };
if (false) {
    /** @type {?} */
    MayaNumberBlockComponent.prototype.number;
    /** @type {?} */
    MayaNumberBlockComponent.prototype.number$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YS1udW1iZXItYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1udW1iZXIvIiwic291cmNlcyI6WyJsaWIvbWF5YS1udW1iZXItYmxvY2svbWF5YS1udW1iZXItYmxvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVoQztJQUFBO0lBc0RBLENBQUM7Ozs7SUEzQ1EsMkNBQVE7OztJQUFmLGNBQW1CLENBQUM7Ozs7O0lBR2IsMENBQU87Ozs7SUFBZCxVQUFlLE1BQU07UUFEckIsaUJBa0JDO1FBaEJDLE9BQU8sS0FBSyxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQW5CLENBQW1CLENBQUMsRUFDL0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxFQUF2QixDQUF1QixDQUFDLEVBQXJDLENBQXFDLENBQUMsRUFDakQsR0FBRyxDQUFDLFVBQUEsS0FBSztZQUNQLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO29CQUNsQixPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsR0FBRyxHQUFHLEVBQVQsQ0FBUyxFQUFFLENBQUMsQ0FBQztnQkFBcEUsQ0FBb0UsQ0FDckU7Z0JBQ0QsS0FBSyxPQUFBO2dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQztvQkFDckIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztpQkFDbkMsQ0FBQyxFQUhvQixDQUdwQixDQUFDO2FBQ0osQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVNLGdEQUFhOzs7O0lBQXBCLFVBQXFCLEdBQWlCO1FBQ3BDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQzNCLFFBQVEsS0FBSyxFQUFFO2dCQUNiLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO2dCQUNELEtBQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO2dCQUNEO29CQUNFLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7OztJQUVNLGlEQUFjOzs7O0lBQXJCLFVBQXNCLEdBQVE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7SUFDakMsQ0FBQzs7Z0JBckRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxvc0JBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7eUJBRUUsS0FBSzs7SUFPTjtRQURDLE9BQU87OztnREFDZ0IsVUFBVTsyREFpQmpDO0lBdUJILCtCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FoRFksd0JBQXdCOzs7SUFDbkMsMENBQXdCOztJQUV4QiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF5YW5EaWdpdCwgTWF5YW5EaWdpdHMsIGdldE1heWFuTnVtYmVyIH0gZnJvbSAnLi9tYXlhLW51bWJlcic7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgZGVmZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1lbW9pemUgfSBmcm9tICdkZWNrbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2tpbmFtLW1heWEtbnVtYmVyLWJsb2NrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21heWEtbnVtYmVyLWJsb2NrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF5YS1udW1iZXItYmxvY2suY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF5YU51bWJlckJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbnVtYmVyOiBudW1iZXI7XG5cbiAgcHVibGljIG51bWJlciQ6IE9ic2VydmFibGU8YW55PjtcblxuICBwdWJsaWMgbmdPbkluaXQoKSB7fVxuXG4gIEBtZW1vaXplXG4gIHB1YmxpYyBnZXRWYWwkKG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IG9mKG51bWJlcikpLnBpcGUoXG4gICAgICBtYXAocmVzID0+IGdldE1heWFuTnVtYmVyKHJlcykpLFxuICAgICAgbWFwKHJlcyA9PiByZXMubWFwKHggPT4geC5maWx0ZXIoeSA9PiB5Lmxlbmd0aCkpKSxcbiAgICAgIG1hcChibG9jayA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbnVtZXJpYzogYmxvY2subWFwKHggPT5cbiAgICAgICAgICAgIHgubWFwKHkgPT4gdGhpcy5nZXRWYWxGcm9tUm93KHkpKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwsIDApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBibG9jayxcbiAgICAgICAgICBpbm5lcjogYmxvY2subWFwKHggPT4gKHtcbiAgICAgICAgICAgIG1heWFuOiB4LFxuICAgICAgICAgICAgbnVtZXJpYzogeC5tYXAodGhpcy5nZXRWYWxGcm9tUm93KVxuICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldFZhbEZyb21Sb3cocm93OiBNYXlhbkRpZ2l0W10pIHtcbiAgICByZXR1cm4gcm93LnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIE1heWFuRGlnaXRzLkZpdmU6IHtcbiAgICAgICAgICByZXR1cm4gYWNjICsgNTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIE1heWFuRGlnaXRzLk9uZToge1xuICAgICAgICAgIHJldHVybiBhY2MgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NpbXBsZU51bWJlcih2YWw6IGFueSkge1xuICAgIGlmICghdmFsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbiAgfVxufVxuIl19