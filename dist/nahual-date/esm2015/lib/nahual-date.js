/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { format } from 'date-fns';
import * as nahualGetter from 'nahuales';
import { DAY_SIGNS } from './day-sign';
import { of } from 'rxjs';
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
const ɵ0 = getImg;
/** @type {?} */
const isValidDate = (date) => {
    return format(date, FORMAT) !== INVALID_DATE;
};
const ɵ1 = isValidDate;
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
        const { nahual, day } = nahualGetter.nahual(this.date);
        this.nahualDay = day;
        this.nahualName = nahual;
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
if (false) {
    /** @type {?} */
    KinamNahual.prototype.nahualName;
    /** @type {?} */
    KinamNahual.prototype.nahualDay;
    /** @type {?} */
    KinamNahual.prototype.daySign;
    /** @type {?} */
    KinamNahual.prototype.image;
    /** @type {?} */
    KinamNahual.prototype.date;
    /** @type {?} */
    KinamNahual.prototype.label;
}
/** @type {?} */
const kinamNahual = (date) => new KinamNahual(date);
const ɵ2 = kinamNahual;
/** @type {?} */
const asObservable = (date) => of(kinamNahual(date));
const ɵ3 = asObservable;
export { kinamNahual, KinamNahual, isValidDate, asObservable };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFodWFsLWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uYWh1YWwtZGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uYWh1YWwtZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEtBQUssWUFBWSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BRXBCLE1BQU0sR0FBRyxZQUFZOztNQUNyQixZQUFZLEdBQUcsY0FBYzs7Ozs7QUFFbkMsU0FBUyxXQUFXLENBQUMsR0FBVzs7VUFDeEIsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQztJQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQy9DLENBQUM7O01BRUssTUFBTSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztNQUV4QyxXQUFXLEdBQUcsQ0FBQyxJQUFtQixFQUFFLEVBQUU7SUFDMUMsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLFlBQVksQ0FBQztBQUMvQyxDQUFDOztBQUVELE1BQU0sV0FBVzs7OztJQVFmLFlBQVksSUFBVztRQUNyQixJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2NBRVgsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDOzs7OztjQUluQixPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUNqQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7OztJQWhEQyxpQ0FBMEI7O0lBQzFCLGdDQUF5Qjs7SUFDekIsOEJBQXVCOztJQUN2Qiw0QkFBcUI7O0lBQ3JCLDJCQUFrQjs7SUFDbEIsNEJBQXFCOzs7TUE2Q2pCLFdBQVcsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDOzs7TUFDbkQsWUFBWSxHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgKiBhcyBuYWh1YWxHZXR0ZXIgZnJvbSAnbmFodWFsZXMnO1xuXG5pbXBvcnQgeyBEQVlfU0lHTlMgfSBmcm9tICcuL2RheS1zaWduJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IEZPUk1BVCA9ICdZWVlZLU1NLUREJztcbmNvbnN0IElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xuXG5mdW5jdGlvbiBmaW5kRGF5U2lnbihkYXk6IG51bWJlcikge1xuICBjb25zdCBzaWduID0gREFZX1NJR05TLmZpbmQocyA9PiBzLmRheSA9PT0gZGF5KTtcbiAgcmV0dXJuIHNpZ24gPyBzaWduIDogeyBuYW1lOiAnJywgbGFiZWw6ICcnIH07XG59XG5cbmNvbnN0IGdldEltZyA9IChkYXlTaWduOiBzdHJpbmcpID0+XG4gIGRheVNpZ24gPyBgYXNzZXRzL3NpZ25zLyR7ZGF5U2lnbn0ucG5nYCA6ICcnO1xuXG5jb25zdCBpc1ZhbGlkRGF0ZSA9IChkYXRlOiBzdHJpbmcgfCBEYXRlKSA9PiB7XG4gIHJldHVybiBmb3JtYXQoZGF0ZSwgRk9STUFUKSAhPT0gSU5WQUxJRF9EQVRFO1xufTtcblxuY2xhc3MgS2luYW1OYWh1YWwge1xuICBwdWJsaWMgbmFodWFsTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgbmFodWFsRGF5OiBudW1iZXI7XG4gIHB1YmxpYyBkYXlTaWduOiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgZGF0ZTogRGF0ZTtcbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0ZT86IERhdGUpIHtcbiAgICBpZiAoaXNWYWxpZERhdGUoZGF0ZSkpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuXG4gICAgY29uc3QgeyBuYWh1YWwsIGRheSB9ID0gbmFodWFsR2V0dGVyLm5haHVhbCh0aGlzLmRhdGUpO1xuXG4gICAgdGhpcy5uYWh1YWxEYXkgPSBkYXk7XG4gICAgdGhpcy5uYWh1YWxOYW1lID0gbmFodWFsO1xuICAgIC8qKlxuICAgICAqIFRPRE86IHZhbGlkYXRlIGRheSBzaWducyB3aXRoIGRhZ1xuICAgICAqL1xuICAgIGNvbnN0IGRheVNpZ24gPSBmaW5kRGF5U2lnbih0aGlzLm5haHVhbERheSk7XG4gICAgdGhpcy5kYXlTaWduID0gZGF5U2lnbi5sYWJlbDtcblxuICAgIHRoaXMuaW1hZ2UgPSBnZXRJbWcoZGF5U2lnbi5uYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXQoY3VzdG9tRm9ybWF0ID0gRk9STUFUKSB7XG4gICAgcmV0dXJuIGZvcm1hdCh0aGlzLmRhdGUsIGN1c3RvbUZvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgeWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cbn1cblxuY29uc3Qga2luYW1OYWh1YWwgPSAoZGF0ZTogRGF0ZSkgPT4gbmV3IEtpbmFtTmFodWFsKGRhdGUpO1xuY29uc3QgYXNPYnNlcnZhYmxlID0gKGRhdGU6IERhdGUpID0+IG9mKGtpbmFtTmFodWFsKGRhdGUpKTtcblxuZXhwb3J0IHsga2luYW1OYWh1YWwsIEtpbmFtTmFodWFsLCBpc1ZhbGlkRGF0ZSwgYXNPYnNlcnZhYmxlIH07XG4iXX0=