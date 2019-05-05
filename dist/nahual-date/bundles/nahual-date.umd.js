(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns'), require('nahuales'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('nahual-date', ['exports', 'date-fns', 'nahuales', 'rxjs'], factory) :
    (factory((global['nahual-date'] = {}),global.dateFns,global.nahualGetter,global.rxjs));
}(this, (function (exports,dateFns,nahualGetter,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAY_SIGNS = [
        {
            name: 'imix',
            label: 'Imix',
            day: 1
        },
        {
            name: 'ik',
            label: 'Ikʼ',
            day: 2
        },
        {
            name: 'akbal',
            label: 'Akʼbʼal',
            day: 3
        },
        {
            name: 'kan',
            label: 'Kʼan',
            day: 4
        },
        {
            name: 'chicchan',
            label: 'Chikchan',
            day: 5
        },
        {
            name: 'cimi',
            label: 'Kimi',
            day: 6
        },
        {
            name: 'manik',
            label: 'Manikʼ',
            day: 7
        },
        {
            name: 'lamat',
            label: 'Lamat',
            day: 8
        },
        {
            name: 'muluc',
            label: 'Muluk',
            day: 9
        },
        {
            name: 'oc',
            label: 'Ok',
            day: 10
        },
        {
            name: 'chuen',
            label: 'Chuwen',
            day: 11
        },
        {
            name: 'eb',
            label: 'Ebʼ',
            day: 12
        },
        {
            name: 'ben',
            label: 'Bʼen',
            day: 13
        },
        {
            name: 'ix',
            label: 'Ix',
            day: 14
        },
        {
            name: 'men',
            label: 'Men',
            day: 15
        },
        {
            name: 'cib',
            label: 'Kibʼ',
            day: 16
        },
        {
            name: 'caban',
            label: 'Kabʼan',
            day: 17
        },
        {
            name: 'etznab',
            label: 'Etzʼnabʼ',
            day: 18
        },
        {
            name: 'cauac',
            label: 'Kawak',
            day: 19
        },
        {
            name: 'ahau',
            label: 'Ajaw',
            day: 20
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FORMAT = 'YYYY-MM-DD';
    /** @type {?} */
    var INVALID_DATE = 'Invalid Date';
    /**
     * @param {?} day
     * @return {?}
     */
    function findDaySign(day) {
        /** @type {?} */
        var sign = DAY_SIGNS.find(function (s) { return s.day === day; });
        return sign ? sign : { name: '', label: '' };
    }
    /** @type {?} */
    var getImg = function (daySign) {
        return daySign ? "assets/signs/" + daySign + ".png" : '';
    };
    /** @type {?} */
    var isValidDate = function (date) {
        return dateFns.format(date, FORMAT) !== INVALID_DATE;
    };
    var KinamNahual = /** @class */ (function () {
        function KinamNahual(date) {
            if (isValidDate(date)) {
                this.date = new Date(date);
            }
            else {
                this.date = new Date();
            }
            this.update(this.date);
        }
        /**
         * @param {?} date
         * @return {?}
         */
        KinamNahual.prototype.update = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.date = date;
                var _a = nahualGetter.nahual(this.date), nahual = _a.nahual, day = _a.day;
                this.nahualDay = day;
                this.nahualName = nahual;
                /**
                 * TODO: validate day signs with dag
                 * @type {?}
                 */
                var daySign = findDaySign(this.nahualDay);
                this.daySign = daySign.label;
                this.image = getImg(daySign.name);
            };
        /**
         * @param {?=} customFormat
         * @return {?}
         */
        KinamNahual.prototype.format = /**
         * @param {?=} customFormat
         * @return {?}
         */
            function (customFormat) {
                if (customFormat === void 0) {
                    customFormat = FORMAT;
                }
                return dateFns.format(this.date, customFormat);
            };
        Object.defineProperty(KinamNahual.prototype, "day", {
            get: /**
             * @return {?}
             */ function () {
                return this.date.getDate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KinamNahual.prototype, "month", {
            get: /**
             * @return {?}
             */ function () {
                return this.date.getMonth() + 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KinamNahual.prototype, "year", {
            get: /**
             * @return {?}
             */ function () {
                return this.date.getFullYear();
            },
            enumerable: true,
            configurable: true
        });
        return KinamNahual;
    }());
    /** @type {?} */
    var kinamNahual = function (date) { return new KinamNahual(date); };
    /** @type {?} */
    var asObservable = function (date) { return rxjs.of(kinamNahual(date)); };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.kinamNahual = kinamNahual;
    exports.KinamNahual = KinamNahual;
    exports.isValidDate = isValidDate;
    exports.asObservable = asObservable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=nahual-date.umd.js.map