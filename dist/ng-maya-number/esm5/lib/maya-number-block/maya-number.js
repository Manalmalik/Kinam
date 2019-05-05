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
var ɵ0 = fiveSequence;
/** @type {?} */
var oneSequence = function (nr) {
    if (nr === void 0) { nr = 1; }
    return new Array(nr).fill(MayanDigits.One);
};
var ɵ1 = oneSequence;
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
var ɵ2 = logBase;
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
export { getMayanNumber, MayanDigits };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YS1udW1iZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXlhLW51bWJlci8iLCJzb3VyY2VzIjpbImxpYi9tYXlhLW51bWJlci1ibG9jay9tYXlhLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxNQUFPLEdBQUc7SUFDVixLQUFNLEdBQUc7SUFDVCxNQUFPLEdBQUc7Ozs7OztJQVFOLFlBQVksR0FBRyxVQUFDLEVBQU07SUFBTixtQkFBQSxFQUFBLE1BQU07SUFDMUIsT0FBTyxJQUFJLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RELENBQUM7OztJQUVLLFdBQVcsR0FBRyxVQUFDLEVBQU07SUFBTixtQkFBQSxFQUFBLE1BQU07SUFDekIsT0FBTyxJQUFJLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELENBQUM7Ozs7OztBQUVELFNBQVMsTUFBTSxDQUFDLE1BQWM7SUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTztRQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckMsQ0FBQztBQUNKLENBQUM7Ozs7O0lBTUssT0FBTyxHQUFHLFVBQUMsQ0FBUyxFQUFFLElBQVksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEI7Ozs7OztBQUV6RSxTQUFTLGNBQWMsQ0FBQyxNQUFjO0lBQ3BDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUNsQixPQUFPO0tBQ1I7SUFDRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEIsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDN0I7O1FBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFDckMsT0FBTyxHQUFHLEVBQUU7SUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFWLENBQVUsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBNYXlhbkRpZ2l0cyB7XG4gIFplcm8gPSAnQCcsXG4gIE9uZSA9ICcuJyxcbiAgRml2ZSA9ICctJ1xufVxuXG50eXBlIE1heWFuRGlnaXQgPSAnQCcgfCAnLicgfCAnLSc7XG5cbi8qKlxuICogR2V0dGVyIGZvciBzZXF1ZW5jZXMgb2Ygc2ltcGxlIG51bWJlcnNcbiAqL1xuY29uc3QgZml2ZVNlcXVlbmNlID0gKG5yID0gMSk6IHN0cmluZ1tdID0+IHtcbiAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KG5yKS5maWxsKE1heWFuRGlnaXRzLkZpdmUpO1xufTtcblxuY29uc3Qgb25lU2VxdWVuY2UgPSAobnIgPSAxKTogc3RyaW5nW10gPT4ge1xuICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4obnIpLmZpbGwoTWF5YW5EaWdpdHMuT25lKTtcbn07XG5cbmZ1bmN0aW9uIGdldFJvdyhudW1iZXI6IG51bWJlcikge1xuICBpZiAoIW51bWJlcikge1xuICAgIHJldHVybiBbW01heWFuRGlnaXRzLlplcm9dXTtcbiAgfVxuICByZXR1cm4gW1xuICAgIG9uZVNlcXVlbmNlKE1hdGguZmxvb3IobnVtYmVyICUgNSkpLFxuICAgIGZpdmVTZXF1ZW5jZShNYXRoLmZsb29yKG51bWJlciAvIDUpKVxuICBdO1xufVxuXG4vKipcbiAqIENvZGUgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhYmJlcjdcbiAqL1xuXG5jb25zdCBsb2dCYXNlID0gKG46IG51bWJlciwgYmFzZTogbnVtYmVyKSA9PiBNYXRoLmxvZyhuKSAvIE1hdGgubG9nKGJhc2UpO1xuXG5mdW5jdGlvbiBnZXRNYXlhbk51bWJlcihudW1iZXI6IG51bWJlcik6IGFueVtdIHtcbiAgaWYgKG51bWJlciA9PT0gTmFOKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChudW1iZXIgPT09IDApIHtcbiAgICByZXR1cm4gW1tNYXlhbkRpZ2l0cy5aZXJvXV07XG4gIH1cbiAgY29uc3QgbG9nID0gTWF0aC5mbG9vcihsb2dCYXNlKG51bWJlciwgMjApKTtcbiAgY29uc3QgY29sbGVjdCA9IFtdO1xuICBmb3IgKGxldCBpID0gbG9nOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IG4gPSBNYXRoLnBvdygyMCwgaSk7XG4gICAgY29uc3QgdG1wID0gTWF0aC5mbG9vcihudW1iZXIgLyBuKTtcbiAgICBudW1iZXIgPSBudW1iZXIgLSB0bXAgKiBuO1xuICAgIGNvbGxlY3QucHVzaChnZXRSb3codG1wKSk7XG4gIH1cbiAgcmV0dXJuIGNvbGxlY3QuZmlsdGVyKHggPT4gISF4Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCB7IGdldE1heWFuTnVtYmVyLCBNYXlhbkRpZ2l0cywgTWF5YW5EaWdpdCB9O1xuIl19