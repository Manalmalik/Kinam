/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { moment } from '../moment';
import { animate, style, AnimationBuilder } from '@angular/animations';
var DateInputComponent = /** @class */ (function () {
    function DateInputComponent(_builder) {
        this._builder = _builder;
        this.open = false;
        this.form = new FormGroup({
            day: new FormControl(null, Validators.required),
            month: new FormControl(null, Validators.required),
            year: new FormControl(null, Validators.required)
        });
        this.dateChange = new EventEmitter();
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
            style({
                transform: "translateY(" + (open ? 0 : direction * 200) + "px)",
                opacity: open ? '1' : '0'
            }),
            animate('200ms cubic-bezier(0.17,0.43,0.75,0.97)', style({
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
        { type: Component, args: [{
                    selector: 'kinam-date',
                    template: "<div\n  class=\"btn-container\"\n  (click)=\"toggle(date, inputs)\"\n>\n  <i\n    class=\"fal\"\n    [ngClass]=\"open ? 'fa-minus' : 'fa-plus'\"\n  ></i>\n</div>\n<div style=\"position: relative; width: 20rem\">\n  <div\n    class=\"date\"\n    #date\n  >\n    <div *ngIf=\"\n          form.get('day').value &&\n            form.get('month').value &&\n            form.get('year').value;\n          else noBd\n        \">\n      {{ form.get('day').value }}.{{ form.get('month').value }}.{{\n          form.get('year').value\n        }}\n    </div>\n  </div>\n  <form\n    #inputs\n    class=\"outer\"\n    action=\"\"\n    [formGroup]=\"form\"\n    (submit)=\"toggle(date, inputs)\"\n    style=\"transform: translateY(200px); opacity: 0;\"\n  >\n    <input\n      type=\"number\"\n      min=\"1\"\n      max=\"31\"\n      placeholder=\"1\"\n      formControlName=\"day\"\n    />\n\n    <input\n      type=\"number\"\n      min=\"1\"\n      max=\"12\"\n      placeholder=\"7\"\n      formControlName=\"month\"\n    />\n\n    <input\n      type=\"number\"\n      min=\"1900\"\n      max=\"2099\"\n      placeholder=\"1992\"\n      formControlName=\"year\"\n    />\n    <button\n      type=\"submit\"\n      hidden\n    ></button>\n  </form>\n</div>\n<ng-template #noBd>\n  <span\n    (click)=\"toggle(date, inputs)\"\n    class=\"enter-label\"\n  >Enter your Birthday</span>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{color:#fff;background-color:#000;display:flex;justify-content:center;position:relative;padding:2rem;min-height:20rem;width:20rem;margin:auto;overflow:hidden}.date{transition:.33s ease-in-out;-webkit-transform:translateY(0);transform:translateY(0);opacity:1;position:absolute;margin-top:1rem;font-size:1.5rem;font-family:century-gothic,sans-serif}.fa-minus,.fa-plus{font-size:2rem;margin:1rem;cursor:pointer}input{border-radius:0;background:rgba(0,0,0,0);padding:1rem;color:#fff;border:none;font-size:2rem;font-family:Montserrat,sans-serif;border-top:none;border-left:none;border-right:none;border-bottom:1px solid #373737;transition:border-bottom .33s ease-in-out}input:active,input:focus{border-bottom:1px solid #fff;transition:border-bottom .33s ease-in-out;outline:0}.outer{overflow:hidden;position:absolute}.outer input{display:block}.enter-label{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    DateInputComponent.ctorParameters = function () { return [
        { type: AnimationBuilder }
    ]; };
    return DateInputComponent;
}());
export { DateInputComponent };
if (false) {
    /** @type {?} */
    DateInputComponent.prototype.open;
    /** @type {?} */
    DateInputComponent.prototype.form;
    /** @type {?} */
    DateInputComponent.prototype.dateChange;
    /**
     * @type {?}
     * @private
     */
    DateInputComponent.prototype._builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1heWEtYmlydGhkYXkvIiwic291cmNlcyI6WyJsaWIvYmlydGhkYXkvZGF0ZS1pbnB1dC9kYXRlLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWix1QkFBdUIsR0FFeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZFO0lBT0UsNEJBQW9CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ3ZDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQy9DLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDakQsQ0FBQyxDQUFDO1FBRUksZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFSRyxDQUFDOzs7O0lBVW5ELG1DQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFBLG9CQUFzQyxFQUFwQyxZQUFHLEVBQUUsZ0JBQUssRUFBRSxjQUF3QjtZQUM1QyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFOztvQkFDbEIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBSSxJQUFJLFNBQUksS0FBSyxTQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLHdDQUFXOzs7Ozs7SUFBbkIsVUFBb0IsU0FBaUIsRUFBRSxJQUFhO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSyxDQUFDO2dCQUNKLFNBQVMsRUFBRSxpQkFBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBSztnQkFDeEQsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2FBQzFCLENBQUM7WUFDRixPQUFPLENBQ0wseUNBQXlDLEVBQ3pDLEtBQUssQ0FBQztnQkFDSixTQUFTLEVBQUUsaUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsU0FBSztnQkFDekQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7YUFDM0IsQ0FBQyxDQUNIO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsbUNBQU07Ozs7O0lBQU4sVUFBTyxFQUFjLEVBQUUsR0FBZTtRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOztZQUNwRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FDckUsR0FBRyxDQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHczQ0FBZ0M7b0JBRWhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUHdCLGdCQUFnQjs7SUFzRHpDLHlCQUFDO0NBQUEsQUFwREQsSUFvREM7U0E5Q1ksa0JBQWtCOzs7SUFFN0Isa0NBQW9COztJQUNwQixrQ0FJRzs7SUFFSCx3Q0FBK0M7Ozs7O0lBUm5DLHNDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBtb21lbnQgfSBmcm9tICcuLi9tb21lbnQnO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2tpbmFtLWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1pbnB1dC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1pbnB1dC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhdGVJbnB1dENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHsgfVxuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIGRheTogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgIG1vbnRoOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgeWVhcjogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gIH0pO1xuXG4gIHB1YmxpYyBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb21lbnQ+KCk7XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsdWUpIHtcbiAgICAgIGNvbnN0IHsgZGF5LCBtb250aCwgeWVhciB9ID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgaWYgKGRheSAmJiBtb250aCAmJiB5ZWFyKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQobmV3IERhdGUoYCR7eWVhcn0vJHttb250aH0vJHtkYXl9YCkpO1xuICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFuaW1GYWN0b3J5KGRpcmVjdGlvbjogbnVtYmVyLCBvcGVuOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkZXIuYnVpbGQoW1xuICAgICAgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7b3BlbiA/IDAgOiBkaXJlY3Rpb24gKiAyMDB9cHgpYCxcbiAgICAgICAgb3BhY2l0eTogb3BlbiA/ICcxJyA6ICcwJ1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKFxuICAgICAgICAnMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTcsMC40MywwLjc1LDAuOTcpJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHshb3BlbiA/IDAgOiBkaXJlY3Rpb24gKiAyMDB9cHgpYCxcbiAgICAgICAgICBvcGFjaXR5OiAhb3BlbiA/ICcxJyA6ICcwJ1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIF0pO1xuICB9XG5cbiAgdG9nZ2xlKGVsOiBFbGVtZW50UmVmLCBlbDI6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuYW5pbUZhY3RvcnkoIXRoaXMub3BlbiA/IDEgOiAtMSwgdGhpcy5vcGVuKS5jcmVhdGUoZWwpO1xuICAgIGNvbnN0IHBsYXllcjIgPSB0aGlzLmFuaW1GYWN0b3J5KHRoaXMub3BlbiA/IDEgOiAtMSwgIXRoaXMub3BlbikuY3JlYXRlKFxuICAgICAgZWwyXG4gICAgKTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllcjIucGxheSgpO1xuICB9XG59XG4iXX0=