/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { SVG } from './svg';
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
export { IconDirective };
if (false) {
    /** @type {?} */
    IconDirective.prototype.name;
    /** @type {?} */
    IconDirective.prototype.centered;
    /** @type {?} */
    IconDirective.prototype.customClasses;
    /** @type {?} */
    IconDirective.prototype.type;
    /** @type {?} */
    IconDirective.prototype.animate;
    /**
     * @type {?}
     * @private
     */
    IconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    IconDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUI7SUFVRSx1QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnRELGtCQUFhLEdBQWEsRUFBRSxDQUFDO0lBSTRCLENBQUM7Ozs7O0lBRTNELHFDQUFhOzs7O0lBQXJCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUNSLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBeEQsQ0FBd0QsRUFDOUQsQ0FBQyxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRU8seUNBQWlCOzs7O0lBQXpCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBSyxJQUFJLENBQUMsSUFBSSxVQUFPLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFRLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sMENBQWtCOzs7SUFBekI7UUFDRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBUEMsVUFBVTtnQkFEVixTQUFTOzs7dUJBVVIsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQTZCUixvQkFBQztDQUFBLEFBckNELElBcUNDO1NBbENZLGFBQWE7OztJQUN4Qiw2QkFBc0I7O0lBQ3RCLGlDQUEyQjs7SUFDM0Isc0NBQXNDOztJQUN0Qyw2QkFBc0I7O0lBQ3RCLGdDQUEwQjs7Ozs7SUFFZCwyQkFBc0I7Ozs7O0lBQUUsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi9zdmcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdba2luYW1JY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbnRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBjdXN0b21DbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuaW1hdGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgX2FuaW1hdGVJZlNldCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FuaW1hdGUnKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRDdXN0b21DbGFzc2VzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgJHt0aGlzLnR5cGV9LWljb25gKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGljb24tJHt0aGlzLm5hbWV9YCk7XG4gICAgdGhpcy5jdXN0b21DbGFzc2VzLmZvckVhY2goY2xzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoU1ZHW3RoaXMubmFtZV0pIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBTVkdbdGhpcy5uYW1lXTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRDdXN0b21DbGFzc2VzKCk7XG4gICAgdGhpcy5fYW5pbWF0ZUlmU2V0KCk7XG4gIH1cbn1cbiJdfQ==