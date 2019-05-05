import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { __spread } from 'tslib';
import { Component, Input, Attribute, ChangeDetectionStrategy, Directive, Renderer2, ElementRef, NgModule, Optional, SkipSelf, Injectable, defineInjectable } from '@angular/core';

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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'kinam-icon',
                    template: "<div\n  kinamIcon\n  class=\"icon\"\n  [customClasses]=\"cssClasses\"\n  [name]=\"name\"\n  [type]=\"getIconType(name)\"\n  [animate]=\"true\"\n></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:flex;justify-content:center;align-items:center}.icon-maya-five,.icon-maya-one{height:1rem;width:1rem;background-color:currentColor;border-radius:1rem;margin:.25rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.icon-maya-five{width:6rem;min-width:4.75rem;display:block;height:.75rem;margin:.25rem auto}.icon-maya-one{width:1rem;min-width:.5rem;display:inline-block}.icon-maya-zero{display:flex;width:5rem;height:3rem}@media only screen and (max-width:600px){.icon-maya-five,.icon-maya-one{margin:.125rem}.icon-maya-five{width:4.75rem}.icon-maya-one{height:.75rem;width:.75rem}}.icon{-webkit-transform:scale(1);transform:scale(1);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.animate{-webkit-transform:scale(.9);transform:scale(.9);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}path.current-color{stroke:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['name',] }] }
    ]; };
    IconComponent.propDecorators = {
        size: [{ type: Input }],
        type: [{ type: Input }],
        classList: [{ type: Input }]
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
        { type: Directive, args: [{
                    selector: '[kinamIcon]'
                },] }
    ];
    /** @nocollapse */
    IconDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IconDirective.propDecorators = {
        name: [{ type: Input }],
        centered: [{ type: Input }],
        customClasses: [{ type: Input }],
        type: [{ type: Input }],
        animate: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        IconModule,
                        HttpClientModule
                    ],
                    exports: [
                        BrowserModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        IconModule,
                        HttpClientModule
                    ]
                },] }
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
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
    /** @nocollapse */ MobileDetectService.ngInjectableDef = defineInjectable({ factory: function MobileDetectService_Factory() { return new MobileDetectService(); }, token: MobileDetectService, providedIn: "root" });
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ LocalStorageService.ngInjectableDef = defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
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

export { CoreModule, MobileDetectService, LocalStorageService, IconComponent as ɵc, IconDirective as ɵb, IconModule as ɵa };

//# sourceMappingURL=core.js.map