(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/datepicker'), require('ng-maya-number'), require('shared'), require('@angular/material/core'), require('@angular/material-moment-adapter'), require('rxjs'), require('nahual-date'), require('moment'), require('rxjs/operators'), require('core'), require('@angular/core'), require('@angular/forms'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ng-maya-birthday', ['exports', '@angular/material/datepicker', 'ng-maya-number', 'shared', '@angular/material/core', '@angular/material-moment-adapter', 'rxjs', 'nahual-date', 'moment', 'rxjs/operators', 'core', '@angular/core', '@angular/forms', '@angular/animations'], factory) :
    (factory((global['ng-maya-birthday'] = {}),global.ng.material.datepicker,global.ngMayaNumber,global.shared,global.ng.material.core,global.ng['material-moment-adapter'],global.rxjs,global.nahualDate,global.moment_,global.rxjs.operators,global.core$1,global.ng.core,global.ng.forms,global.ng.animations));
}(this, (function (exports,datepicker,ngMayaNumber,shared,core,materialMomentAdapter,rxjs,nahualDate,moment_,operators,core$1,core$2,forms,animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DateFormat = {
        parse: {
            dateInput: 'input'
        },
        display: {
            dateInput: 'DD.MM.YYYY',
            monthYearLabel: 'MMMM YYYY',
            dateA11yLabel: 'DD.MM.YYYY',
            monthYearA11yLabel: 'MMMM YYYY'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var moment = moment_;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var YEAR_MAX = 2099;
    /** @type {?} */
    var YEAR_MIN = 1900;
    /** @type {?} */
    var validators = {
        year: [
            forms.Validators.required,
            forms.Validators.min(YEAR_MIN),
            forms.Validators.max(YEAR_MAX)
        ],
        month: [
            forms.Validators.required,
            forms.Validators.min(1),
            forms.Validators.max(12)
        ],
        day: [
            forms.Validators.required,
            forms.Validators.min(1),
            forms.Validators.max(31)
        ]
    };
    var ɵ0 = DateFormat;
    var BirthdayComponent = /** @class */ (function () {
        function BirthdayComponent(localStorageService) {
            this.localStorageService = localStorageService;
            this.date = new Date();
            this.loading$ = new rxjs.BehaviorSubject(false);
            this.maxDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        /**
         * @return {?}
         */
        BirthdayComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var lastDate = localStorage.getItem('birthday');
                /** @type {?} */
                var today = new Date();
                if (!lastDate) {
                    this.form = new forms.FormGroup({
                        day: new forms.FormControl(today.getDate(), validators.day),
                        month: new forms.FormControl(today.getMonth() + 1, validators.month),
                        year: new forms.FormControl(today.getFullYear(), validators.year)
                    });
                    this.kinamDate = nahualDate.kinamNahual(today);
                }
                else {
                    /** @type {?} */
                    var timestamp = new Date(lastDate);
                    this.form = new forms.FormGroup({
                        day: new forms.FormControl(timestamp.getDate(), validators.day),
                        month: new forms.FormControl(timestamp.getMonth() + 1, validators.month),
                        year: new forms.FormControl(timestamp.getFullYear(), validators.year)
                    });
                    this.kinamDate = nahualDate.kinamNahual(timestamp);
                }
                this.form.valueChanges.pipe(operators.distinctUntilChanged(), operators.switchMap(function (x) { return rxjs.of(x); }), operators.tap(function () { return _this.loading$.next(true); }), operators.debounceTime(1000), operators.filter(function (_a) {
                    var day = _a.day, month = _a.month, year = _a.year;
                    /** @type {?} */
                    var x = !(!isNaN(day) &&
                        !isNaN(month) &&
                        !isNaN(year) &&
                        !!day &&
                        !!month &&
                        !!year &&
                        year <= YEAR_MAX &&
                        year >= YEAR_MIN);
                    if (x === false) {
                        return true;
                    }
                    return false;
                })).subscribe(function (_a) {
                    var day = _a.day, month = _a.month, year = _a.year;
                    /** @type {?} */
                    var date = moment(new Date(year + "/" + month + "/" + day));
                    date = date.add(12, 'hours');
                    _this.localStorageService.set('birthday', date.toString());
                    _this.kinamDate.update(date.toDate());
                    _this.loading$.next(false);
                });
            };
        BirthdayComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: 'kinam-birthday',
                        template: "<div\n  [formGroup]=\"form\"\n  class=\"birthday-blocks\"\n>\n  <kinam-maya-number-block [number]=\"kinamDate?.day\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1\"\n      [max]=\"maxDates[form?.get('month')?.value - 1]\"\n      placeholder=\"Day\"\n      formControlName=\"day\"\n    />\n  </kinam-maya-number-block>\n\n  <kinam-maya-number-block [number]=\"kinamDate?.month\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1\"\n      max=\"12\"\n      placeholder=\"Month\"\n      formControlName=\"month\"\n    />\n  </kinam-maya-number-block>\n\n  <kinam-maya-number-block [number]=\"kinamDate?.year\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1900\"\n      max=\"2099\"\n      placeholder=\"Year\"\n      formControlName=\"year\"\n    />\n  </kinam-maya-number-block>\n</div>\n\n<div\n  class=\"anim-container\"\n  [ngSwitch]=\"!(loading$ | async)\"\n>\n\n  <div\n    class=\"reading columns\"\n    *ngSwitchCase=\"true\"\n    [@calc]\n  >\n    <div class=\"column is-4\">\n      <h2 class=\"title has-text-centered has-text-white\">\n        Your Nahual: {{ kinamDate?.nahualName  }}\n      </h2>\n      <h2 class=\"title has-text-centered has-text-white\">\n        Your Day Sign: {{ kinamDate?.daySign }}\n      </h2>\n    </div>\n    <div class=\"column is-4\">\n      <img\n        *ngIf=\"kinamDate?.image\"\n        [src]=\"kinamDate?.image\"\n        [attr.alt]=\"'Nahual Sign: ' + kinamDate?.daySign\"\n      />\n    </div>\n    <div class=\"column is-4\">\n      <h2 class=\"title has-text-centered has-text-white\">\n        Galactic Number: {{ kinamDate?.nahualDay  }}\n      </h2>\n      <kinam-maya-number-block\n        class=\"is-centered is-inverted\"\n        [number]=\"kinamDate?.nahualDay\"\n      ></kinam-maya-number-block>\n    </div>\n  </div>\n\n  <div\n    class=\"columns\"\n    *ngSwitchCase=\"true\"\n  >\n    <div class=\"column is-6 is-offset-3 flex-center\">\n      <kinam-readings></kinam-readings>\n    </div>\n  </div>\n\n  <div\n    *ngSwitchCase=\"false\"\n    [@calc]\n    class=\"calculating\"\n  >\n    <h2 class=\"title has-text-white\">Calculating your Nahual.</h2>\n    <div>\n      <svg\n        width=\"100px\"\n        height=\"100px\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 100 100\"\n        preserveAspectRatio=\"xMidYMid\"\n        class=\"lds-ball\"\n        style=\"background: none;\"\n      >\n        <circle\n          cx=\"50\"\n          cy=\"35.7097\"\n          r=\"13\"\n          fill=\"#fdfdfd\"\n        >\n          <animate\n            attributeName=\"cy\"\n            calcMode=\"spline\"\n            values=\"23;77;23\"\n            keyTimes=\"0;0.5;1\"\n            dur=\"1\"\n            keySplines=\"0.45 0 0.9 0.55;0 0.45 0.55 0.9\"\n            begin=\"0s\"\n            repeatCount=\"indefinite\"\n          ></animate>\n        </circle>\n      </svg>\n    </div>\n  </div>\n</div>",
                        providers: [
                            {
                                provide: core.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [core.MAT_DATE_LOCALE]
                            },
                            { provide: core.MAT_DATE_FORMATS, useValue: ɵ0 }
                        ],
                        animations: [
                            animations.trigger('calc', [
                                animations.transition(':enter', [
                                    animations.style({ transform: 'translateX(15%)', opacity: 1 }),
                                    animations.animate(200)
                                ]),
                                animations.transition(':leave', [
                                    animations.group([
                                        animations.animate('0.2s', animations.style({ transform: 'translateX(-15%)' })),
                                        animations.animate('0.2s ease', animations.style({
                                            opacity: 0
                                        }))
                                    ])
                                ])
                            ])
                        ],
                        styles: [":host{text-align:center;display:block}.title{margin-bottom:2rem}.anim-container{height:325px;position:relative}@media screen and (max-width:767px){.anim-container{height:615px}}@media screen and (max-width:320px){.birthday-input{font-size:1.5rem}}.is-centered{margin:2rem auto}.is-inverted{-webkit-filter:invert(100%);filter:invert(100%)}.calculating,.reading{width:100%}.birthday-blocks{max-width:30rem;display:flex;align-items:flex-end;justify-content:center;margin:2rem auto;-webkit-filter:invert(100%);filter:invert(100%);border-radius:.25rem}.birthday-input{border:1px solid;border-radius:1.5rem;background:#fff;padding:0 1.5rem;-webkit-filter:invert(100%);filter:invert(100%);transition:box-shadow .2s ease-in-out}.birthday-input.mat-focused{box-shadow:0 0 6px 2px rgba(0,0,0,.75);transition:box-shadow .2s ease-in-out}@media only screen and (max-width:320px){.birthday-blocks{margin:2rem}}kinam-maya-number-block{width:calc(100% / 3)}@media only screen and (max-width:600px){.birthday-blocks{align-items:flex-end;justify-content:center;flex-direction:row}}img{-webkit-filter:invert(100%);filter:invert(100%)}table{width:50%;margin:2rem auto;text-align:center;table-layout:fixed;-webkit-filter:invert(100%);filter:invert(100%)}strong{margin-top:1rem}.date-input{border-radius:0;background-color:#0000;border:none;padding:1rem 0;color:#000;max-width:110px;width:110px;font-size:2rem;font-family:Montserrat,sans-serif;border-top:none;border-left:none;border-right:none;text-align:center;box-shadow:0 1px 0 0 rgba(122,122,122,.5);transition:.2s ease-in-out}.date-input:active,.date-input:focus{transition:.2s ease-in-out;box-shadow:0 2px 0 0 #000;outline:0}"]
                    }] }
        ];
        /** @nocollapse */
        BirthdayComponent.ctorParameters = function () {
            return [
                { type: core$1.LocalStorageService }
            ];
        };
        return BirthdayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetReadingComponent = /** @class */ (function () {
        function GetReadingComponent() {
        }
        GetReadingComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: 'kinam-readings',
                        template: "\n    <div class=\"hover-container\">\n      <div class=\"outer\">\n        <div class=\"inner overlay\" id=\"overlay\"></div>\n        <div class=\"inner outline\"></div>\n        <div class=\"behind fill\">\n          <div class=\"text\">\n            Get your Tzolk\u02BCin Readings\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: [".hover-container{background-color:#000;display:flex;justify-content:center;align-items:center;position:relative}.inner{border:1px solid #fff;width:15rem;height:11rem;font-size:2rem;background-color:#fff;transition:background-color .3s ease-in-out}.outline{border:1px solid #fff;width:15rem;height:11rem}.behind{background:#000;width:15rem;height:11rem;border:1px solid;-webkit-transform:translateX(-4%) translateY(-104%);transform:translateX(-4%) translateY(-104%);position:absolute}.fill{color:#fff;z-index:3;font-size:2rem;font-family:century-gothic,sans-serif}.overlay{background:0 0;position:absolute;z-index:5;transition:background .3s ease-in-out}.fill,.inner{border-radius:.5rem}.text{margin:1rem 2rem}.outer{cursor:pointer}.outer:hover .fill{background-color:#fff;color:#000;transition:background-color .3s ease-in-out,color .3s ease-in-out}.outer:hover .overlay{border:1px solid #000;transition:border .3s ease-in-out}.outer:hover .inner{background-color:#000;color:#fff;z-index:-1;transition:background-color .3s ease-in-out,color .3s ease-in-out}:host{margin:2rem}"]
                    }] }
        ];
        return GetReadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReadingsModule = /** @class */ (function () {
        function ReadingsModule() {
        }
        ReadingsModule.decorators = [
            { type: core$2.NgModule, args: [{
                        declarations: [GetReadingComponent],
                        imports: [core$1.CoreModule],
                        exports: [GetReadingComponent]
                    },] }
        ];
        return ReadingsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateInputComponent = /** @class */ (function () {
        function DateInputComponent(_builder) {
            this._builder = _builder;
            this.open = false;
            this.form = new forms.FormGroup({
                day: new forms.FormControl(null, forms.Validators.required),
                month: new forms.FormControl(null, forms.Validators.required),
                year: new forms.FormControl(null, forms.Validators.required)
            });
            this.dateChange = new core$2.EventEmitter();
        }
        /**
         * @return {?}
         */
        DateInputComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                if (this.form.value) {
                    var _a = this.form.value, day = _a.day, month = _a.month, year = _a.year;
                    if (day && month && year) {
                        /** @type {?} */
                        var date = moment(new Date(year + "/" + month + "/" + day));
                        this.dateChange.emit(date);
                    }
                }
            };
        /**
         * @private
         * @param {?} direction
         * @param {?} open
         * @return {?}
         */
        DateInputComponent.prototype.animFactory = /**
         * @private
         * @param {?} direction
         * @param {?} open
         * @return {?}
         */
            function (direction, open) {
                return this._builder.build([
                    animations.style({
                        transform: "translateY(" + (open ? 0 : direction * 200) + "px)",
                        opacity: open ? '1' : '0'
                    }),
                    animations.animate('200ms cubic-bezier(0.17,0.43,0.75,0.97)', animations.style({
                        transform: "translateY(" + (!open ? 0 : direction * 200) + "px)",
                        opacity: !open ? '1' : '0'
                    }))
                ]);
            };
        /**
         * @param {?} el
         * @param {?} el2
         * @return {?}
         */
        DateInputComponent.prototype.toggle = /**
         * @param {?} el
         * @param {?} el2
         * @return {?}
         */
            function (el, el2) {
                this.open = !this.open;
                /** @type {?} */
                var player = this.animFactory(!this.open ? 1 : -1, this.open).create(el);
                /** @type {?} */
                var player2 = this.animFactory(this.open ? 1 : -1, !this.open).create(el2);
                player.play();
                player2.play();
            };
        DateInputComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: 'kinam-date',
                        template: "<div\n  class=\"btn-container\"\n  (click)=\"toggle(date, inputs)\"\n>\n  <i\n    class=\"fal\"\n    [ngClass]=\"open ? 'fa-minus' : 'fa-plus'\"\n  ></i>\n</div>\n<div style=\"position: relative; width: 20rem\">\n  <div\n    class=\"date\"\n    #date\n  >\n    <div *ngIf=\"\n          form.get('day').value &&\n            form.get('month').value &&\n            form.get('year').value;\n          else noBd\n        \">\n      {{ form.get('day').value }}.{{ form.get('month').value }}.{{\n          form.get('year').value\n        }}\n    </div>\n  </div>\n  <form\n    #inputs\n    class=\"outer\"\n    action=\"\"\n    [formGroup]=\"form\"\n    (submit)=\"toggle(date, inputs)\"\n    style=\"transform: translateY(200px); opacity: 0;\"\n  >\n    <input\n      type=\"number\"\n      min=\"1\"\n      max=\"31\"\n      placeholder=\"1\"\n      formControlName=\"day\"\n    />\n\n    <input\n      type=\"number\"\n      min=\"1\"\n      max=\"12\"\n      placeholder=\"7\"\n      formControlName=\"month\"\n    />\n\n    <input\n      type=\"number\"\n      min=\"1900\"\n      max=\"2099\"\n      placeholder=\"1992\"\n      formControlName=\"year\"\n    />\n    <button\n      type=\"submit\"\n      hidden\n    ></button>\n  </form>\n</div>\n<ng-template #noBd>\n  <span\n    (click)=\"toggle(date, inputs)\"\n    class=\"enter-label\"\n  >Enter your Birthday</span>\n</ng-template>",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush,
                        styles: [":host{color:#fff;background-color:#000;display:flex;justify-content:center;position:relative;padding:2rem;min-height:20rem;width:20rem;margin:auto;overflow:hidden}.date{transition:.33s ease-in-out;-webkit-transform:translateY(0);transform:translateY(0);opacity:1;position:absolute;margin-top:1rem;font-size:1.5rem;font-family:century-gothic,sans-serif}.fa-minus,.fa-plus{font-size:2rem;margin:1rem;cursor:pointer}input{border-radius:0;background:rgba(0,0,0,0);padding:1rem;color:#fff;border:none;font-size:2rem;font-family:Montserrat,sans-serif;border-top:none;border-left:none;border-right:none;border-bottom:1px solid #373737;transition:border-bottom .33s ease-in-out}input:active,input:focus{border-bottom:1px solid #fff;transition:border-bottom .33s ease-in-out;outline:0}.outer{overflow:hidden;position:absolute}.outer input{display:block}.enter-label{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        DateInputComponent.ctorParameters = function () {
            return [
                { type: animations.AnimationBuilder }
            ];
        };
        return DateInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BirthdayModule = /** @class */ (function () {
        function BirthdayModule() {
        }
        BirthdayModule.decorators = [
            { type: core$2.NgModule, args: [{
                        declarations: [BirthdayComponent, DateInputComponent],
                        imports: [
                            datepicker.MatDatepickerModule,
                            core.MatNativeDateModule,
                            ngMayaNumber.MayanNumberModule,
                            shared.SharedModule,
                            ReadingsModule,
                        ],
                        exports: [
                            BirthdayComponent,
                            datepicker.MatDatepickerModule,
                            core.MatNativeDateModule,
                            ngMayaNumber.MayanNumberModule,
                            shared.SharedModule
                        ]
                    },] }
        ];
        return BirthdayModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.moment = moment;
    exports.DateFormat = DateFormat;
    exports.BirthdayModule = BirthdayModule;
    exports.ɵa = BirthdayComponent;
    exports.ɵb = DateInputComponent;
    exports.ɵd = GetReadingComponent;
    exports.ɵc = ReadingsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-maya-birthday.umd.js.map