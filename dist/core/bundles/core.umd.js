(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('core', ['exports', '@angular/common/http', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/common', '@angular/core'], factory) :
    (factory((global.core = {}),global.ng.common.http,global.ng.platformBrowser,global.ng.platformBrowser.animations,global.ng.common,global.ng.core));
}(this, (function (exports,http,platformBrowser,animations,common,i0) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var IconSource = {
        Css: 'css',
        Svg: 'svg',
    };
    /** @type {?} */
    var IconSources = {
        'maya-zero': IconSource.Svg,
        'maya-one': IconSource.Css,
        'maya-five': IconSource.Css
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconComponent = /** @class */ (function () {
        function IconComponent(name) {
            this.name = name;
            // Icon size.
            this.size = 'sm';
            // Icon type.
            this.type = 'maya-number';
            // Icon type.
            this.classList = [];
        }
        Object.defineProperty(IconComponent.prototype, "cssClasses", {
            get: /**
             * @return {?}
             */ function () {
                if (this.getIconType(this.name) === IconSource.Css) {
                    return __spread(this.classList, [
                        this.size,
                        "icon",
                        "css-icon",
                        "icon-" + this.name
                    ]);
                }
                return __spread(this.classList, [
                    this.size,
                    'icon',
                    'svg-icon',
                    "icon-" + this.name
                ]);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @return {?}
         */
        IconComponent.prototype.getIconType = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!IconSources[name]) {
                    throw new Error("Couldn't find icon " + name);
                }
                return IconSources[name];
            };
        IconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'kinam-icon',
                        template: "<div\n  kinamIcon\n  class=\"icon\"\n  [customClasses]=\"cssClasses\"\n  [name]=\"name\"\n  [type]=\"getIconType(name)\"\n  [animate]=\"true\"\n></div>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:flex;justify-content:center;align-items:center}.icon-maya-five,.icon-maya-one{height:1rem;width:1rem;background-color:currentColor;border-radius:1rem;margin:.25rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.icon-maya-five{width:6rem;min-width:4.75rem;display:block;height:.75rem;margin:.25rem auto}.icon-maya-one{width:1rem;min-width:.5rem;display:inline-block}.icon-maya-zero{display:flex;width:5rem;height:3rem}@media only screen and (max-width:600px){.icon-maya-five,.icon-maya-one{margin:.125rem}.icon-maya-five{width:4.75rem}.icon-maya-one{height:.75rem;width:.75rem}}.icon{-webkit-transform:scale(1);transform:scale(1);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.animate{-webkit-transform:scale(.9);transform:scale(.9);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}path.current-color{stroke:currentColor}"]
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['name',] }] }
            ];
        };
        IconComponent.propDecorators = {
            size: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            classList: [{ type: i0.Input }]
        };
        return IconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:max-line-length */
    /** @type {?} */
    var SVG = {
        'maya-zero': '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="50"><path class="current-color" fill="none" stroke="#fff" stroke-width="2.4" d="M40,9a32,16 0 1,0 1,0zm-30,11q30,18 61,0m-42-10q-7,8 0,18m12-19q-8,10 0,20m11-19q-7,8 0,18"/></svg>'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IconDirective = /** @class */ (function () {
        function IconDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.customClasses = [];
        }
        /**
         * @private
         * @return {?}
         */
        IconDirective.prototype._animateIfSet = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.animate) {
                    setTimeout(function () { return _this.renderer.addClass(_this.el.nativeElement, 'animate'); }, 0);
                }
            };
        /**
         * @private
         * @return {?}
         */
        IconDirective.prototype._addCustomClasses = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.addClass(this.el.nativeElement, this.type + "-icon");
                this.renderer.addClass(this.el.nativeElement, "icon-" + this.name);
                this.customClasses.forEach(function (cls) {
                    _this.renderer.addClass(_this.el.nativeElement, cls);
                });
            };
        /**
         * @return {?}
         */
        IconDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                if (SVG[this.name]) {
                    this.el.nativeElement.innerHTML = SVG[this.name];
                }
                this._addCustomClasses();
                this._animateIfSet();
            };
        IconDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[kinamIcon]'
                    },] }
        ];
        /** @nocollapse */
        IconDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        IconDirective.propDecorators = {
            name: [{ type: i0.Input }],
            centered: [{ type: i0.Input }],
            customClasses: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            animate: [{ type: i0.Input }]
        };
        return IconDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Implementation for the icon logic.
     */
    var IconModule = /** @class */ (function () {
        function IconModule() {
        }
        IconModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [IconDirective, IconComponent],
                        exports: [IconComponent, IconDirective]
                    },] }
        ];
        return IconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Implementation for the icon logic.
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            // Make sure this module is imported only once.
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
            }
        }
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            common.CommonModule,
                            IconModule,
                            http.HttpClientModule
                        ],
                        exports: [
                            platformBrowser.BrowserModule,
                            animations.BrowserAnimationsModule,
                            common.CommonModule,
                            IconModule,
                            http.HttpClientModule
                        ]
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () {
            return [
                { type: CoreModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MobileDetectService = /** @class */ (function () {
        function MobileDetectService() {
        }
        Object.defineProperty(MobileDetectService.prototype, "isMobile", {
            get: /**
             * @return {?}
             */ function () {
                return !!navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MobileDetectService.prototype, "isIOS", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MobileDetectService.ngInjectableDef = i0.defineInjectable({ factory: function MobileDetectService_Factory() { return new MobileDetectService(); }, token: MobileDetectService, providedIn: "root" });
        return MobileDetectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
        return LocalStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CoreModule = CoreModule;
    exports.MobileDetectService = MobileDetectService;
    exports.LocalStorageService = LocalStorageService;
    exports.ɵc = IconComponent;
    exports.ɵb = IconDirective;
    exports.ɵa = IconModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=core.umd.js.map