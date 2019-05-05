(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core'), require('shared'), require('@angular/animations'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('decko')) :
    typeof define === 'function' && define.amd ? define('ng-maya-number', ['exports', 'core', 'shared', '@angular/animations', '@angular/core', 'rxjs', 'rxjs/operators', 'decko'], factory) :
    (factory((global['ng-maya-number'] = {}),global.core,global.shared,global.ng.animations,global.ng.core,global.rxjs,global.rxjs.operators,global.decko));
}(this, (function (exports,core,shared,animations,core$1,rxjs,operators,decko) { 'use strict';

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
            { type: core$1.Component, args: [{
                        selector: 'kinam-maya-number',
                        template: "<ng-container [ngSwitch]=\"number\">\n  <kinam-icon *ngSwitchCase=\"'@'\" name=\"maya-zero\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'.'\" name=\"maya-one\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'-'\" name=\"maya-five\"></kinam-icon>\n</ng-container>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        animations: [
                            animations.trigger('loading', [
                                animations.state('0', animations.style({
                                    transform: 'scale(0.75)'
                                })),
                                animations.state('1', animations.style({
                                    transform: 'scale(1)'
                                })),
                                animations.transition('* => *', [animations.animate('0.5s')])
                            ])
                        ]
                    }] }
        ];
        MayaNumberComponent.propDecorators = {
            number: [{ type: core$1.Input }]
        };
        return MayaNumberComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

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
        if (nr === void 0) {
            nr = 1;
        }
        return new Array(nr).fill(MayanDigits.Five);
    };
    /** @type {?} */
    var oneSequence = function (nr) {
        if (nr === void 0) {
            nr = 1;
        }
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
                return rxjs.defer(function () { return rxjs.of(number); }).pipe(operators.map(function (res) { return getMayanNumber(res); }), operators.map(function (res) { return res.map(function (x) { return x.filter(function (y) { return y.length; }); }); }), operators.map(function (block) {
                    return {
                        numeric: block.map(function (x) {
                            return x.map(function (y) { return _this.getValFromRow(y); }).reduce(function (acc, val) { return acc + val; }, 0);
                        }),
                        block: block,
                        inner: block.map(function (x) {
                            return ({
                                mayan: x,
                                numeric: x.map(_this.getValFromRow)
                            });
                        })
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
            { type: core$1.Component, args: [{
                        selector: 'kinam-maya-number-block',
                        template: "<div *ngIf=\"getVal$(number) | async as numberBlock\" class=\"number-container\">\n  <section\n    *ngFor=\"let blockRow of numberBlock.block; let i = index\"\n    class=\"maya-number-block\"\n  >\n    <div\n      *ngFor=\"let numberRow of blockRow; let j = index\"\n      class=\"number-row\"\n      [class.inline-numbers]=\"\n        numberBlock.inner[i].numeric[j] < 5 &&\n        numberBlock.inner[i].numeric[j] > 1\n      \"\n      [class.justify-content-center]=\"numberBlock.numeric[i] === 2\"\n    >\n      <kinam-maya-number\n        *ngFor=\"let glyph of numberRow\"\n        [number]=\"glyph\"\n      ></kinam-maya-number>\n    </div>\n  </section>\n</div>\n<ng-content></ng-content>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:.75rem 1.5rem;color:#fff}.number-container{border-radius:.5rem;background:#000}.maya-number-block{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;width:7.5rem;max-height:7rem;min-height:4rem;padding:.5rem .25rem;box-sizing:content-box}@media screen and (min-width:0px) and (max-width:480px){.maya-number-block{margin:.5rem;max-width:4.5rem}:host{margin:.5rem}}.inline-numbers{display:flex;justify-content:space-between;flex-direction:row;width:6rem}@media only screen and (max-width:600px){.number-row{width:4.75rem}}.number-row{text-align:center}.justify-content-center{justify-content:center}"]
                    }] }
        ];
        MayaNumberBlockComponent.propDecorators = {
            number: [{ type: core$1.Input }]
        };
        __decorate([
            decko.memoize,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", rxjs.Observable)
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
            { type: core$1.NgModule, args: [{
                        imports: [core.CoreModule, shared.SharedModule],
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

    exports.MayanNumberModule = MayanNumberModule;
    exports.ɵb = MayaNumberBlockComponent;
    exports.ɵa = MayaNumberComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-maya-number.umd.js.map