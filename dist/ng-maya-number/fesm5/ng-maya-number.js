import { CoreModule } from 'core';
import { SharedModule } from 'shared';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { __decorate, __metadata } from 'tslib';
import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { of, Observable, defer } from 'rxjs';
import { map } from 'rxjs/operators';
import { memoize } from 'decko';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MayaNumberComponent = /** @class */ (function () {
    function MayaNumberComponent() {
    }
    /**
     * @return {?}
     */
    MayaNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.triggerLoading = 1;
    };
    MayaNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kinam-maya-number',
                    template: "<ng-container [ngSwitch]=\"number\">\n  <kinam-icon *ngSwitchCase=\"'@'\" name=\"maya-zero\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'.'\" name=\"maya-one\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'-'\" name=\"maya-five\"></kinam-icon>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('loading', [
                            state('0', style({
                                transform: 'scale(0.75)'
                            })),
                            state('1', style({
                                transform: 'scale(1)'
                            })),
                            transition('* => *', [animate('0.5s')])
                        ])
                    ]
                }] }
    ];
    MayaNumberComponent.propDecorators = {
        number: [{ type: Input }]
    };
    return MayaNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MayanDigits = {
    Zero: '@',
    One: '.',
    Five: '-',
};
/**
 * Getter for sequences of simple numbers
 * @type {?}
 */
var fiveSequence = function (nr) {
    if (nr === void 0) { nr = 1; }
    return new Array(nr).fill(MayanDigits.Five);
};
/** @type {?} */
var oneSequence = function (nr) {
    if (nr === void 0) { nr = 1; }
    return new Array(nr).fill(MayanDigits.One);
};
/**
 * @param {?} number
 * @return {?}
 */
function getRow(number) {
    if (!number) {
        return [[MayanDigits.Zero]];
    }
    return [
        oneSequence(Math.floor(number % 5)),
        fiveSequence(Math.floor(number / 5))
    ];
}
/**
 * Code by https://github.com/gabber7
 * @type {?}
 */
var logBase = function (n, base) { return Math.log(n) / Math.log(base); };
/**
 * @param {?} number
 * @return {?}
 */
function getMayanNumber(number) {
    if (number === NaN) {
        return;
    }
    if (number === 0) {
        return [[MayanDigits.Zero]];
    }
    /** @type {?} */
    var log = Math.floor(logBase(number, 20));
    /** @type {?} */
    var collect = [];
    for (var i = log; i >= 0; i--) {
        /** @type {?} */
        var n = Math.pow(20, i);
        /** @type {?} */
        var tmp = Math.floor(number / n);
        number = number - tmp * n;
        collect.push(getRow(tmp));
    }
    return collect.filter(function (x) { return !!x.length; });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    __decorate([
        memoize,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], MayaNumberBlockComponent.prototype, "getVal$", null);
    return MayaNumberBlockComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MayanNumberModule = /** @class */ (function () {
    function MayanNumberModule() {
    }
    MayanNumberModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CoreModule, SharedModule],
                    declarations: [MayaNumberComponent, MayaNumberBlockComponent],
                    exports: [MayaNumberComponent, MayaNumberBlockComponent]
                },] }
    ];
    return MayanNumberModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MayanNumberModule, MayaNumberBlockComponent as ɵb, MayaNumberComponent as ɵa };

//# sourceMappingURL=ng-maya-number.js.map