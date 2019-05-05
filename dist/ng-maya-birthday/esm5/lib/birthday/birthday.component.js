/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { trigger, transition, style, animate, group } from '@angular/animations';
import { BehaviorSubject, of } from 'rxjs';
import { kinamNahual } from 'nahual-date';
import { LocalStorageService } from 'core';
import { DateFormat } from './date-format';
import { moment } from './moment';
import { tap, switchMap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
/** @type {?} */
var YEAR_MAX = 2099;
/** @type {?} */
var YEAR_MIN = 1900;
/** @type {?} */
var validators = {
    year: [
        Validators.required,
        Validators.min(YEAR_MIN),
        Validators.max(YEAR_MAX)
    ],
    month: [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
    ],
    day: [
        Validators.required,
        Validators.min(1),
        Validators.max(31)
    ]
};
var ɵ0 = DateFormat;
var BirthdayComponent = /** @class */ (function () {
    function BirthdayComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.date = new Date();
        this.loading$ = new BehaviorSubject(false);
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
            this.form = new FormGroup({
                day: new FormControl(today.getDate(), validators.day),
                month: new FormControl(today.getMonth() + 1, validators.month),
                year: new FormControl(today.getFullYear(), validators.year)
            });
            this.kinamDate = kinamNahual(today);
        }
        else {
            /** @type {?} */
            var timestamp = new Date(lastDate);
            this.form = new FormGroup({
                day: new FormControl(timestamp.getDate(), validators.day),
                month: new FormControl(timestamp.getMonth() + 1, validators.month),
                year: new FormControl(timestamp.getFullYear(), validators.year)
            });
            this.kinamDate = kinamNahual(timestamp);
        }
        this.form.valueChanges.pipe(distinctUntilChanged(), switchMap(function (x) { return of(x); }), tap(function () { return _this.loading$.next(true); }), debounceTime(1000), filter(function (_a) {
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
        { type: Component, args: [{
                    selector: 'kinam-birthday',
                    template: "<div\n  [formGroup]=\"form\"\n  class=\"birthday-blocks\"\n>\n  <kinam-maya-number-block [number]=\"kinamDate?.day\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1\"\n      [max]=\"maxDates[form?.get('month')?.value - 1]\"\n      placeholder=\"Day\"\n      formControlName=\"day\"\n    />\n  </kinam-maya-number-block>\n\n  <kinam-maya-number-block [number]=\"kinamDate?.month\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1\"\n      max=\"12\"\n      placeholder=\"Month\"\n      formControlName=\"month\"\n    />\n  </kinam-maya-number-block>\n\n  <kinam-maya-number-block [number]=\"kinamDate?.year\">\n    <input\n      class=\"date-input\"\n      type=\"number\"\n      min=\"1900\"\n      max=\"2099\"\n      placeholder=\"Year\"\n      formControlName=\"year\"\n    />\n  </kinam-maya-number-block>\n</div>\n\n<div\n  class=\"anim-container\"\n  [ngSwitch]=\"!(loading$ | async)\"\n>\n\n  <div\n    class=\"reading columns\"\n    *ngSwitchCase=\"true\"\n    [@calc]\n  >\n    <div class=\"column is-4\">\n      <h2 class=\"title has-text-centered has-text-white\">\n        Your Nahual: {{ kinamDate?.nahualName  }}\n      </h2>\n      <h2 class=\"title has-text-centered has-text-white\">\n        Your Day Sign: {{ kinamDate?.daySign }}\n      </h2>\n    </div>\n    <div class=\"column is-4\">\n      <img\n        *ngIf=\"kinamDate?.image\"\n        [src]=\"kinamDate?.image\"\n        [attr.alt]=\"'Nahual Sign: ' + kinamDate?.daySign\"\n      />\n    </div>\n    <div class=\"column is-4\">\n      <h2 class=\"title has-text-centered has-text-white\">\n        Galactic Number: {{ kinamDate?.nahualDay  }}\n      </h2>\n      <kinam-maya-number-block\n        class=\"is-centered is-inverted\"\n        [number]=\"kinamDate?.nahualDay\"\n      ></kinam-maya-number-block>\n    </div>\n  </div>\n\n  <div\n    class=\"columns\"\n    *ngSwitchCase=\"true\"\n  >\n    <div class=\"column is-6 is-offset-3 flex-center\">\n      <kinam-readings></kinam-readings>\n    </div>\n  </div>\n\n  <div\n    *ngSwitchCase=\"false\"\n    [@calc]\n    class=\"calculating\"\n  >\n    <h2 class=\"title has-text-white\">Calculating your Nahual.</h2>\n    <div>\n      <svg\n        width=\"100px\"\n        height=\"100px\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        viewBox=\"0 0 100 100\"\n        preserveAspectRatio=\"xMidYMid\"\n        class=\"lds-ball\"\n        style=\"background: none;\"\n      >\n        <circle\n          cx=\"50\"\n          cy=\"35.7097\"\n          r=\"13\"\n          fill=\"#fdfdfd\"\n        >\n          <animate\n            attributeName=\"cy\"\n            calcMode=\"spline\"\n            values=\"23;77;23\"\n            keyTimes=\"0;0.5;1\"\n            dur=\"1\"\n            keySplines=\"0.45 0 0.9 0.55;0 0.45 0.55 0.9\"\n            begin=\"0s\"\n            repeatCount=\"indefinite\"\n          ></animate>\n        </circle>\n      </svg>\n    </div>\n  </div>\n</div>",
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0 }
                    ],
                    animations: [
                        trigger('calc', [
                            transition(':enter', [
                                style({ transform: 'translateX(15%)', opacity: 1 }),
                                animate(200)
                            ]),
                            transition(':leave', [
                                group([
                                    animate('0.2s', style({ transform: 'translateX(-15%)' })),
                                    animate('0.2s ease', style({
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
    BirthdayComponent.ctorParameters = function () { return [
        { type: LocalStorageService }
    ]; };
    return BirthdayComponent;
}());
export { BirthdayComponent };
if (false) {
    /** @type {?} */
    BirthdayComponent.prototype.date;
    /** @type {?} */
    BirthdayComponent.prototype.kinamDate;
    /** @type {?} */
    BirthdayComponent.prototype.dateCtrl;
    /** @type {?} */
    BirthdayComponent.prototype.loading$;
    /** @type {?} */
    BirthdayComponent.prototype.dateConfig;
    /** @type {?} */
    BirthdayComponent.prototype.form;
    /** @type {?} */
    BirthdayComponent.prototype.maxDates;
    /**
     * @type {?}
     * @private
     */
    BirthdayComponent.prototype.localStorageService;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlydGhkYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1iaXJ0aGRheS8iLCJzb3VyY2VzIjpbImxpYi9iaXJ0aGRheS9iaXJ0aGRheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQWUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUV0RixRQUFRLEdBQUcsSUFBSTs7SUFDZixRQUFRLEdBQUcsSUFBSTs7SUFFZixVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFO1FBQ0osVUFBVSxDQUFDLFFBQVE7UUFDbkIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDeEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7S0FDekI7SUFDRCxLQUFLLEVBQUU7UUFDTCxVQUFVLENBQUMsUUFBUTtRQUNuQixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUNuQjtJQUNELEdBQUcsRUFBRTtRQUNILFVBQVUsQ0FBQyxRQUFRO1FBQ25CLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0tBQ25CO0NBQ0Y7U0FZMEMsVUFBVTtBQVZyRDtJQW9DRSwyQkFDVSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVAzQyxTQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUlsQixhQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFldEMsYUFBUSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQVgvRCxDQUFDOzs7O0lBYUUsb0NBQVE7OztJQUFmO1FBQUEsaUJBb0RDOztZQWxETyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7O1lBRTNDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRTtRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUM5RCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDNUQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7YUFBTTs7Z0JBQ0MsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xFLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQzthQUNoRSxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDekIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFMLENBQUssQ0FBQyxFQUNyQixHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLEVBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFDbEIsTUFBTSxDQUNKLFVBQUMsRUFBb0I7Z0JBQWxCLFlBQUcsRUFBRSxnQkFBSyxFQUFFLGNBQUk7O2dCQUNYLENBQUMsR0FBRyxDQUFDLENBQ1QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNYLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDYixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLEdBQUc7Z0JBQ0wsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLElBQUk7Z0JBQ04sSUFBSSxJQUFJLFFBQVE7Z0JBQ2hCLElBQUksSUFBSSxRQUFRLENBQ2pCO1lBQ0QsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FDRixDQUNGLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBb0I7Z0JBQWxCLFlBQUcsRUFBRSxnQkFBSyxFQUFFLGNBQUk7O2dCQUN6QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFJLElBQUksU0FBSSxLQUFLLFNBQUksR0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw0N0ZBQXdDO29CQUV4QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7NEJBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQzt5QkFDeEI7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUFZLEVBQUU7cUJBQ3BEO29CQUNELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNkLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUM7NkJBQ2IsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUM7b0NBQ0osT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29DQUN6RCxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQzt3Q0FDekIsT0FBTyxFQUFFLENBQUM7cUNBQ1gsQ0FBQyxDQUFDO2lDQUNKLENBQUM7NkJBQ0gsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkF2RFEsbUJBQW1COztJQW1JNUIsd0JBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQTNFWSxpQkFBaUI7OztJQUM1QixpQ0FBeUI7O0lBRXpCLHNDQUE4Qjs7SUFDOUIscUNBQTZCOztJQUM3QixxQ0FBNkM7O0lBTTdDLHVDQUtFOztJQUVGLGlDQUF1Qjs7SUFFdkIscUNBQW1FOzs7OztJQVpqRSxnREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9MT0NBTEUsXG4gIE1BVF9EQVRFX0ZPUk1BVFNcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNb21lbnREYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEtpbmFtTmFodWFsLCBraW5hbU5haHVhbCB9IGZyb20gJ25haHVhbC1kYXRlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdjb3JlJztcblxuaW1wb3J0IHsgRGF0ZUZvcm1hdCB9IGZyb20gJy4vZGF0ZS1mb3JtYXQnO1xuaW1wb3J0IHsgbW9tZW50IH0gZnJvbSAnLi9tb21lbnQnO1xuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAsIGRlYm91bmNlVGltZSwgZmlsdGVyLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgWUVBUl9NQVggPSAyMDk5O1xuY29uc3QgWUVBUl9NSU4gPSAxOTAwO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge1xuICB5ZWFyOiBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLm1pbihZRUFSX01JTiksXG4gICAgVmFsaWRhdG9ycy5tYXgoWUVBUl9NQVgpXG4gIF0sXG4gIG1vbnRoOiBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLm1pbigxKSxcbiAgICBWYWxpZGF0b3JzLm1heCgxMilcbiAgXSxcbiAgZGF5OiBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLm1pbigxKSxcbiAgICBWYWxpZGF0b3JzLm1heCgzMSlcbiAgXVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna2luYW0tYmlydGhkYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vYmlydGhkYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iaXJ0aGRheS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBEYXRlRm9ybWF0IH1cbiAgXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NhbGMnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxNSUpJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgYW5pbWF0ZSgyMDApXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgZ3JvdXAoW1xuICAgICAgICAgIGFuaW1hdGUoJzAuMnMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTE1JSknIH0pKSxcbiAgICAgICAgICBhbmltYXRlKCcwLjJzIGVhc2UnLCBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSkpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmlydGhkYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgcHVibGljIGtpbmFtRGF0ZTogS2luYW1OYWh1YWw7XG4gIHB1YmxpYyBkYXRlQ3RybDogRm9ybUNvbnRyb2w7XG4gIHB1YmxpYyBsb2FkaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgKSB7IH1cblxuICBwdWJsaWMgZGF0ZUNvbmZpZzoge1xuICAgIG1pbjogRGF0ZTtcbiAgICB0b2RheTogRGF0ZTtcbiAgICBzdGFydFZpZXc6ICdtdWx0aS15ZWFyJyB8ICd5ZWFyJztcbiAgICB0b3VjaFVpOiBib29sZWFuO1xuICB9O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgcHVibGljIG1heERhdGVzID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcblxuICAgIGNvbnN0IGxhc3REYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JpcnRoZGF5Jyk7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKCFsYXN0RGF0ZSkge1xuICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIGRheTogbmV3IEZvcm1Db250cm9sKHRvZGF5LmdldERhdGUoKSwgdmFsaWRhdG9ycy5kYXkpLFxuICAgICAgICBtb250aDogbmV3IEZvcm1Db250cm9sKHRvZGF5LmdldE1vbnRoKCkgKyAxLCB2YWxpZGF0b3JzLm1vbnRoKSxcbiAgICAgICAgeWVhcjogbmV3IEZvcm1Db250cm9sKHRvZGF5LmdldEZ1bGxZZWFyKCksIHZhbGlkYXRvcnMueWVhcilcbiAgICAgIH0pO1xuICAgICAgdGhpcy5raW5hbURhdGUgPSBraW5hbU5haHVhbCh0b2RheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKGxhc3REYXRlKTtcbiAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICBkYXk6IG5ldyBGb3JtQ29udHJvbCh0aW1lc3RhbXAuZ2V0RGF0ZSgpLCB2YWxpZGF0b3JzLmRheSksXG4gICAgICAgIG1vbnRoOiBuZXcgRm9ybUNvbnRyb2wodGltZXN0YW1wLmdldE1vbnRoKCkgKyAxLCB2YWxpZGF0b3JzLm1vbnRoKSxcbiAgICAgICAgeWVhcjogbmV3IEZvcm1Db250cm9sKHRpbWVzdGFtcC5nZXRGdWxsWWVhcigpLCB2YWxpZGF0b3JzLnllYXIpXG4gICAgICB9KTtcbiAgICAgIHRoaXMua2luYW1EYXRlID0ga2luYW1OYWh1YWwodGltZXN0YW1wKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc3dpdGNoTWFwKHggPT4gb2YoeCkpLFxuICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGluZyQubmV4dCh0cnVlKSksXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwMCksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgICh7IGRheSwgbW9udGgsIHllYXIgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSAhKFxuICAgICAgICAgICAgIWlzTmFOKGRheSkgJiZcbiAgICAgICAgICAgICFpc05hTihtb250aCkgJiZcbiAgICAgICAgICAgICFpc05hTih5ZWFyKSAmJlxuICAgICAgICAgICAgISFkYXkgJiZcbiAgICAgICAgICAgICEhbW9udGggJiZcbiAgICAgICAgICAgICEheWVhciAmJlxuICAgICAgICAgICAgeWVhciA8PSBZRUFSX01BWCAmJlxuICAgICAgICAgICAgeWVhciA+PSBZRUFSX01JTlxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKS5zdWJzY3JpYmUoKHsgZGF5LCBtb250aCwgeWVhciB9KSA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IG1vbWVudChuZXcgRGF0ZShgJHt5ZWFyfS8ke21vbnRofS8ke2RheX1gKSk7XG4gICAgICBkYXRlID0gZGF0ZS5hZGQoMTIsICdob3VycycpO1xuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYmlydGhkYXknLCBkYXRlLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5raW5hbURhdGUudXBkYXRlKGRhdGUudG9EYXRlKCkpO1xuICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19