/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MayanDigits, getMayanNumber } from './maya-number';
import { of, Observable, defer } from 'rxjs';
import { map } from 'rxjs/operators';
import { memoize } from 'decko';
export class MayaNumberBlockComponent {
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} number
     * @return {?}
     */
    getVal$(number) {
        return defer(() => of(number)).pipe(map(res => getMayanNumber(res)), map(res => res.map(x => x.filter(y => y.length))), map(block => {
            return {
                numeric: block.map(x => x.map(y => this.getValFromRow(y)).reduce((acc, val) => acc + val, 0)),
                block,
                inner: block.map(x => ({
                    mayan: x,
                    numeric: x.map(this.getValFromRow)
                }))
            };
        }));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getValFromRow(row) {
        return row.reduce((acc, value) => {
            switch (value) {
                case MayanDigits.Five: {
                    return acc + 5;
                }
                case MayanDigits.One: {
                    return acc + 1;
                }
                default:
                    return acc;
            }
        }, 0);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    isSimpleNumber(val) {
        if (!val.length) {
            return true;
        }
        return typeof val === 'string';
    }
}
MayaNumberBlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'kinam-maya-number-block',
                template: "<div *ngIf=\"getVal$(number) | async as numberBlock\" class=\"number-container\">\n  <section\n    *ngFor=\"let blockRow of numberBlock.block; let i = index\"\n    class=\"maya-number-block\"\n  >\n    <div\n      *ngFor=\"let numberRow of blockRow; let j = index\"\n      class=\"number-row\"\n      [class.inline-numbers]=\"\n        numberBlock.inner[i].numeric[j] < 5 &&\n        numberBlock.inner[i].numeric[j] > 1\n      \"\n      [class.justify-content-center]=\"numberBlock.numeric[i] === 2\"\n    >\n      <kinam-maya-number\n        *ngFor=\"let glyph of numberRow\"\n        [number]=\"glyph\"\n      ></kinam-maya-number>\n    </div>\n  </section>\n</div>\n<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:.75rem 1.5rem;color:#fff}.number-container{border-radius:.5rem;background:#000}.maya-number-block{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 auto;width:7.5rem;max-height:7rem;min-height:4rem;padding:.5rem .25rem;box-sizing:content-box}@media screen and (min-width:0px) and (max-width:480px){.maya-number-block{margin:.5rem;max-width:4.5rem}:host{margin:.5rem}}.inline-numbers{display:flex;justify-content:space-between;flex-direction:row;width:6rem}@media only screen and (max-width:600px){.number-row{width:4.75rem}}.number-row{text-align:center}.justify-content-center{justify-content:center}"]
            }] }
];
MayaNumberBlockComponent.propDecorators = {
    number: [{ type: Input }]
};
tslib_1.__decorate([
    memoize,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Observable)
], MayaNumberBlockComponent.prototype, "getVal$", null);
if (false) {
    /** @type {?} */
    MayaNumberBlockComponent.prototype.number;
    /** @type {?} */
    MayaNumberBlockComponent.prototype.number$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF5YS1udW1iZXItYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWF5YS1udW1iZXIvIiwic291cmNlcyI6WyJsaWIvbWF5YS1udW1iZXItYmxvY2svbWF5YS1udW1iZXItYmxvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQVFoQyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBSzVCLFFBQVEsS0FBSSxDQUFDOzs7OztJQUdiLE9BQU8sQ0FBQyxNQUFNO1FBQ25CLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDakQsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsT0FBTztnQkFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNyQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3JFO2dCQUNELEtBQUs7Z0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixLQUFLLEVBQUUsQ0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNuQyxDQUFDLENBQUM7YUFDSixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLEdBQWlCO1FBQ3BDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQixRQUFRLEtBQUssRUFBRTtnQkFDYixLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtnQkFDRCxLQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtnQkFDRDtvQkFDRSxPQUFPLEdBQUcsQ0FBQzthQUNkO1FBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsR0FBUTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztJQUNqQyxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG9zQkFBaUQ7Z0JBRWpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O3FCQUVFLEtBQUs7O0FBT047SUFEQyxPQUFPOzs7NENBQ2dCLFVBQVU7dURBaUJqQzs7O0lBeEJELDBDQUF3Qjs7SUFFeEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1heWFuRGlnaXQsIE1heWFuRGlnaXRzLCBnZXRNYXlhbk51bWJlciB9IGZyb20gJy4vbWF5YS1udW1iZXInO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIGRlZmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZW1vaXplIH0gZnJvbSAnZGVja28nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdraW5hbS1tYXlhLW51bWJlci1ibG9jaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXlhLW51bWJlci1ibG9jay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21heWEtbnVtYmVyLWJsb2NrLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1heWFOdW1iZXJCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyO1xuXG4gIHB1YmxpYyBudW1iZXIkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHVibGljIG5nT25Jbml0KCkge31cblxuICBAbWVtb2l6ZVxuICBwdWJsaWMgZ2V0VmFsJChudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBkZWZlcigoKSA9PiBvZihudW1iZXIpKS5waXBlKFxuICAgICAgbWFwKHJlcyA9PiBnZXRNYXlhbk51bWJlcihyZXMpKSxcbiAgICAgIG1hcChyZXMgPT4gcmVzLm1hcCh4ID0+IHguZmlsdGVyKHkgPT4geS5sZW5ndGgpKSksXG4gICAgICBtYXAoYmxvY2sgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG51bWVyaWM6IGJsb2NrLm1hcCh4ID0+XG4gICAgICAgICAgICB4Lm1hcCh5ID0+IHRoaXMuZ2V0VmFsRnJvbVJvdyh5KSkucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKVxuICAgICAgICAgICksXG4gICAgICAgICAgYmxvY2ssXG4gICAgICAgICAgaW5uZXI6IGJsb2NrLm1hcCh4ID0+ICh7XG4gICAgICAgICAgICBtYXlhbjogeCxcbiAgICAgICAgICAgIG51bWVyaWM6IHgubWFwKHRoaXMuZ2V0VmFsRnJvbVJvdylcbiAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRWYWxGcm9tUm93KHJvdzogTWF5YW5EaWdpdFtdKSB7XG4gICAgcmV0dXJuIHJvdy5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBNYXlhbkRpZ2l0cy5GaXZlOiB7XG4gICAgICAgICAgcmV0dXJuIGFjYyArIDU7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBNYXlhbkRpZ2l0cy5PbmU6IHtcbiAgICAgICAgICByZXR1cm4gYWNjICsgMTtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaXNTaW1wbGVOdW1iZXIodmFsOiBhbnkpIHtcbiAgICBpZiAoIXZhbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG4gIH1cbn1cbiJdfQ==