import { format } from 'date-fns';
import { nahual } from 'nahuales';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAY_SIGNS = [
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
const FORMAT = 'YYYY-MM-DD';
/** @type {?} */
const INVALID_DATE = 'Invalid Date';
/**
 * @param {?} day
 * @return {?}
 */
function findDaySign(day) {
    /** @type {?} */
    const sign = DAY_SIGNS.find(s => s.day === day);
    return sign ? sign : { name: '', label: '' };
}
/** @type {?} */
const getImg = (daySign) => daySign ? `assets/signs/${daySign}.png` : '';
/** @type {?} */
const isValidDate = (date) => {
    return format(date, FORMAT) !== INVALID_DATE;
};
class KinamNahual {
    /**
     * @param {?=} date
     */
    constructor(date) {
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
    update(date) {
        this.date = date;
        const { nahual: nahual$$1, day } = nahual(this.date);
        this.nahualDay = day;
        this.nahualName = nahual$$1;
        /**
         * TODO: validate day signs with dag
         * @type {?}
         */
        const daySign = findDaySign(this.nahualDay);
        this.daySign = daySign.label;
        this.image = getImg(daySign.name);
    }
    /**
     * @param {?=} customFormat
     * @return {?}
     */
    format(customFormat = FORMAT) {
        return format(this.date, customFormat);
    }
    /**
     * @return {?}
     */
    get day() {
        return this.date.getDate();
    }
    /**
     * @return {?}
     */
    get month() {
        return this.date.getMonth() + 1;
    }
    /**
     * @return {?}
     */
    get year() {
        return this.date.getFullYear();
    }
}
/** @type {?} */
const kinamNahual = (date) => new KinamNahual(date);
/** @type {?} */
const asObservable = (date) => of(kinamNahual(date));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { kinamNahual, KinamNahual, isValidDate, asObservable };

//# sourceMappingURL=nahual-date.js.map