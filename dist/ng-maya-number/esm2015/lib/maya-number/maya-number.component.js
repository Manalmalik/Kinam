/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
export class MayaNumberComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.triggerLoading = 1;
    }
}
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
if (false) {
    /** @type {?} */
    MayaNumberComponent.prototype.number;
    /** @type {?} */
    MayaNumberComponent.prototype.triggerLoading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1udW1iZXIvIiwic291cmNlcyI6WyJsaWIvbWF5YS1udW1iZXIvbWF5YS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQXdCN0IsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUt2QixRQUFRO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvUkFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFNBQVMsRUFBRTt3QkFDakIsS0FBSyxDQUNILEdBQUcsRUFDSCxLQUFLLENBQUM7NEJBQ0osU0FBUyxFQUFFLGFBQWE7eUJBQ3pCLENBQUMsQ0FDSDt3QkFDRCxLQUFLLENBQ0gsR0FBRyxFQUNILEtBQUssQ0FBQzs0QkFDSixTQUFTLEVBQUUsVUFBVTt5QkFDdEIsQ0FBQyxDQUNIO3dCQUNELFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDeEMsQ0FBQztpQkFDSDthQUNGOzs7cUJBRUUsS0FBSzs7OztJQUFOLHFDQUF3Qjs7SUFFeEIsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHN0YXRlLFxuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna2luYW0tbWF5YS1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF5YS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2xvYWRpbmcnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJzAnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC43NSknXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICcxJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIFthbmltYXRlKCcwLjVzJyldKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF5YU51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xuXG4gIHB1YmxpYyB0cmlnZ2VyTG9hZGluZzogbnVtYmVyO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJMb2FkaW5nID0gMTtcbiAgfVxufVxuIl19