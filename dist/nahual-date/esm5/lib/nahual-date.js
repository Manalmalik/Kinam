/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { format } from 'date-fns';
import * as nahualGetter from 'nahuales';
import { DAY_SIGNS } from './day-sign';
import { of } from 'rxjs';
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
var ɵ0 = getImg;
/** @type {?} */
var isValidDate = function (date) {
    return format(date, FORMAT) !== INVALID_DATE;
};
var ɵ1 = isValidDate;
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
        if (customFormat === void 0) { customFormat = FORMAT; }
        return format(this.date, customFormat);
    };
    Object.defineProperty(KinamNahual.prototype, "day", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.getDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KinamNahual.prototype, "month", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.getMonth() + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KinamNahual.prototype, "year", {
        get: /**
         * @return {?}
         */
        function () {
            return this.date.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    return KinamNahual;
}());
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
var kinamNahual = function (date) { return new KinamNahual(date); };
var ɵ2 = kinamNahual;
/** @type {?} */
var asObservable = function (date) { return of(kinamNahual(date)); };
var ɵ3 = asObservable;
export { kinamNahual, KinamNahual, isValidDate, asObservable };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFodWFsLWRhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uYWh1YWwtZGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9uYWh1YWwtZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEtBQUssWUFBWSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBRXBCLE1BQU0sR0FBRyxZQUFZOztJQUNyQixZQUFZLEdBQUcsY0FBYzs7Ozs7QUFFbkMsU0FBUyxXQUFXLENBQUMsR0FBVzs7UUFDeEIsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBYixDQUFhLENBQUM7SUFDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMvQyxDQUFDOztJQUVLLE1BQU0sR0FBRyxVQUFDLE9BQWU7SUFDN0IsT0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFnQixPQUFPLFNBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUE1QyxDQUE0Qzs7O0lBRXhDLFdBQVcsR0FBRyxVQUFDLElBQW1CO0lBQ3RDLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxZQUFZLENBQUM7QUFDL0MsQ0FBQzs7QUFFRDtJQVFFLHFCQUFZLElBQVc7UUFDckIsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSw0QkFBTTs7OztJQUFiLFVBQWMsSUFBVTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVYLElBQUEsbUNBQWdELEVBQTlDLGtCQUFNLEVBQUUsWUFBc0M7UUFFdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Ozs7O1lBSW5CLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sNEJBQU07Ozs7SUFBYixVQUFjLFlBQXFCO1FBQXJCLDZCQUFBLEVBQUEscUJBQXFCO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFXLDRCQUFHOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4QkFBSzs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw2QkFBSTs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDOzs7SUFoREMsaUNBQTBCOztJQUMxQixnQ0FBeUI7O0lBQ3pCLDhCQUF1Qjs7SUFDdkIsNEJBQXFCOztJQUNyQiwyQkFBa0I7O0lBQ2xCLDRCQUFxQjs7O0lBNkNqQixXQUFXLEdBQUcsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUI7OztJQUNuRCxZQUFZLEdBQUcsVUFBQyxJQUFVLElBQUssT0FBQSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXJCLENBQXFCOztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgKiBhcyBuYWh1YWxHZXR0ZXIgZnJvbSAnbmFodWFsZXMnO1xuXG5pbXBvcnQgeyBEQVlfU0lHTlMgfSBmcm9tICcuL2RheS1zaWduJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IEZPUk1BVCA9ICdZWVlZLU1NLUREJztcbmNvbnN0IElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xuXG5mdW5jdGlvbiBmaW5kRGF5U2lnbihkYXk6IG51bWJlcikge1xuICBjb25zdCBzaWduID0gREFZX1NJR05TLmZpbmQocyA9PiBzLmRheSA9PT0gZGF5KTtcbiAgcmV0dXJuIHNpZ24gPyBzaWduIDogeyBuYW1lOiAnJywgbGFiZWw6ICcnIH07XG59XG5cbmNvbnN0IGdldEltZyA9IChkYXlTaWduOiBzdHJpbmcpID0+XG4gIGRheVNpZ24gPyBgYXNzZXRzL3NpZ25zLyR7ZGF5U2lnbn0ucG5nYCA6ICcnO1xuXG5jb25zdCBpc1ZhbGlkRGF0ZSA9IChkYXRlOiBzdHJpbmcgfCBEYXRlKSA9PiB7XG4gIHJldHVybiBmb3JtYXQoZGF0ZSwgRk9STUFUKSAhPT0gSU5WQUxJRF9EQVRFO1xufTtcblxuY2xhc3MgS2luYW1OYWh1YWwge1xuICBwdWJsaWMgbmFodWFsTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgbmFodWFsRGF5OiBudW1iZXI7XG4gIHB1YmxpYyBkYXlTaWduOiBzdHJpbmc7XG4gIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xuICBwdWJsaWMgZGF0ZTogRGF0ZTtcbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0ZT86IERhdGUpIHtcbiAgICBpZiAoaXNWYWxpZERhdGUoZGF0ZSkpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuXG4gICAgY29uc3QgeyBuYWh1YWwsIGRheSB9ID0gbmFodWFsR2V0dGVyLm5haHVhbCh0aGlzLmRhdGUpO1xuXG4gICAgdGhpcy5uYWh1YWxEYXkgPSBkYXk7XG4gICAgdGhpcy5uYWh1YWxOYW1lID0gbmFodWFsO1xuICAgIC8qKlxuICAgICAqIFRPRE86IHZhbGlkYXRlIGRheSBzaWducyB3aXRoIGRhZ1xuICAgICAqL1xuICAgIGNvbnN0IGRheVNpZ24gPSBmaW5kRGF5U2lnbih0aGlzLm5haHVhbERheSk7XG4gICAgdGhpcy5kYXlTaWduID0gZGF5U2lnbi5sYWJlbDtcblxuICAgIHRoaXMuaW1hZ2UgPSBnZXRJbWcoZGF5U2lnbi5uYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXQoY3VzdG9tRm9ybWF0ID0gRk9STUFUKSB7XG4gICAgcmV0dXJuIGZvcm1hdCh0aGlzLmRhdGUsIGN1c3RvbUZvcm1hdCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLmdldERhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgeWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cbn1cblxuY29uc3Qga2luYW1OYWh1YWwgPSAoZGF0ZTogRGF0ZSkgPT4gbmV3IEtpbmFtTmFodWFsKGRhdGUpO1xuY29uc3QgYXNPYnNlcnZhYmxlID0gKGRhdGU6IERhdGUpID0+IG9mKGtpbmFtTmFodWFsKGRhdGUpKTtcblxuZXhwb3J0IHsga2luYW1OYWh1YWwsIEtpbmFtTmFodWFsLCBpc1ZhbGlkRGF0ZSwgYXNPYnNlcnZhYmxlIH07XG4iXX0=