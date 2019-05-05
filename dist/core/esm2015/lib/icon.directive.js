/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { SVG } from './svg';
export class IconDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.customClasses = [];
    }
    /**
     * @private
     * @return {?}
     */
    _animateIfSet() {
        if (this.animate) {
            setTimeout(() => this.renderer.addClass(this.el.nativeElement, 'animate'), 0);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _addCustomClasses() {
        this.renderer.addClass(this.el.nativeElement, `${this.type}-icon`);
        this.renderer.addClass(this.el.nativeElement, `icon-${this.name}`);
        this.customClasses.forEach(cls => {
            this.renderer.addClass(this.el.nativeElement, cls);
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (SVG[this.name]) {
            this.el.nativeElement.innerHTML = SVG[this.name];
        }
        this._addCustomClasses();
        this._animateIfSet();
    }
}
IconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kinamIcon]'
            },] }
];
/** @nocollapse */
IconDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
IconDirective.propDecorators = {
    name: [{ type: Input }],
    centered: [{ type: Input }],
    customClasses: [{ type: Input }],
    type: [{ type: Input }],
    animate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFLNUIsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBT3hCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp0RCxrQkFBYSxHQUFhLEVBQUUsQ0FBQztJQUk0QixDQUFDOzs7OztJQUUzRCxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQzlELENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBUEMsVUFBVTtZQURWLFNBQVM7OzttQkFVUixLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFKTiw2QkFBc0I7O0lBQ3RCLGlDQUEyQjs7SUFDM0Isc0NBQXNDOztJQUN0Qyw2QkFBc0I7O0lBQ3RCLGdDQUEwQjs7Ozs7SUFFZCwyQkFBc0I7Ozs7O0lBQUUsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSAnLi9zdmcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdba2luYW1JY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNlbnRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBjdXN0b21DbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuaW1hdGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgX2FuaW1hdGVJZlNldCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FuaW1hdGUnKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRDdXN0b21DbGFzc2VzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBgJHt0aGlzLnR5cGV9LWljb25gKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYGljb24tJHt0aGlzLm5hbWV9YCk7XG4gICAgdGhpcy5jdXN0b21DbGFzc2VzLmZvckVhY2goY2xzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoU1ZHW3RoaXMubmFtZV0pIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBTVkdbdGhpcy5uYW1lXTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRDdXN0b21DbGFzc2VzKCk7XG4gICAgdGhpcy5fYW5pbWF0ZUlmU2V0KCk7XG4gIH1cbn1cbiJdfQ==