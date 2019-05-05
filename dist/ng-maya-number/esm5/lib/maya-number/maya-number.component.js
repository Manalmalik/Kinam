/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
var MayaNumberComponent = /** @class */ (function () {
    function MayaNumberComponent() {
    }
    /**
     * @return {?}
     */
    MayaNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.triggerLoading = 1;
    };
    MayaNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kinam-maya-number',
                    template: "<ng-container [ngSwitch]=\"number\">\n  <kinam-icon *ngSwitchCase=\"'@'\" name=\"maya-zero\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'.'\" name=\"maya-one\"></kinam-icon>\n  <kinam-icon *ngSwitchCase=\"'-'\" name=\"maya-five\"></kinam-icon>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('loading', [
                            state('0', style({
                                transform: 'scale(0.75)'
                            })),
                            state('1', style({
                                transform: 'scale(1)'
                            })),
                            transition('* => *', [animate('0.5s')])
                        ])
                    ]
                }] }
    ];
    MayaNumberComponent.propDecorators = {
        number: [{ type: Input }]
    };
    return MayaNumberComponent;
}());
export { MayaNumberComponent };
if (false) {
    /** @type {?} */
    MayaNumberComponent.prototype.number;
    /** @type {?} */
    MayaNumberComponent.prototype.triggerLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1udW1iZXIvIiwic291cmNlcyI6WyJsaWIvbWF5YS1udW1iZXIvbWF5YS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QjtJQUFBO0lBOEJBLENBQUM7Ozs7SUFIUSxzQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLG9SQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsU0FBUyxFQUFFOzRCQUNqQixLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQztnQ0FDSixTQUFTLEVBQUUsYUFBYTs2QkFDekIsQ0FBQyxDQUNIOzRCQUNELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO2dDQUNKLFNBQVMsRUFBRSxVQUFVOzZCQUN0QixDQUFDLENBQ0g7NEJBQ0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUN4QyxDQUFDO3FCQUNIO2lCQUNGOzs7eUJBRUUsS0FBSzs7SUFPUiwwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBUlksbUJBQW1COzs7SUFDOUIscUNBQXdCOztJQUV4Qiw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgc3RhdGUsXG4gIHRyaWdnZXIsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdraW5hbS1tYXlhLW51bWJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXlhLW51bWJlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbG9hZGluZycsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnMCcsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJzEnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgW2FuaW1hdGUoJzAuNXMnKV0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXlhTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbnVtYmVyOiBzdHJpbmc7XG5cbiAgcHVibGljIHRyaWdnZXJMb2FkaW5nOiBudW1iZXI7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlckxvYWRpbmcgPSAxO1xuICB9XG59XG4iXX0=