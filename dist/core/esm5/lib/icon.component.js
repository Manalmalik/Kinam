/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { IconSources, IconSource } from './icon';
var IconComponent = /** @class */ (function () {
    function IconComponent(name) {
        this.name = name;
        // Icon size.
        this.size = 'sm';
        // Icon type.
        this.type = 'maya-number';
        // Icon type.
        this.classList = [];
    }
    Object.defineProperty(IconComponent.prototype, "cssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.getIconType(this.name) === IconSource.Css) {
                return tslib_1.__spread(this.classList, [
                    this.size,
                    "icon",
                    "css-icon",
                    "icon-" + this.name
                ]);
            }
            return tslib_1.__spread(this.classList, [
                this.size,
                'icon',
                'svg-icon',
                "icon-" + this.name
            ]);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    IconComponent.prototype.getIconType = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!IconSources[name]) {
            throw new Error("Couldn't find icon " + name);
        }
        return IconSources[name];
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kinam-icon',
                    template: "<div\n  kinamIcon\n  class=\"icon\"\n  [customClasses]=\"cssClasses\"\n  [name]=\"name\"\n  [type]=\"getIconType(name)\"\n  [animate]=\"true\"\n></div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:flex;justify-content:center;align-items:center}.icon-maya-five,.icon-maya-one{height:1rem;width:1rem;background-color:currentColor;border-radius:1rem;margin:.25rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.icon-maya-five{width:6rem;min-width:4.75rem;display:block;height:.75rem;margin:.25rem auto}.icon-maya-one{width:1rem;min-width:.5rem;display:inline-block}.icon-maya-zero{display:flex;width:5rem;height:3rem}@media only screen and (max-width:600px){.icon-maya-five,.icon-maya-one{margin:.125rem}.icon-maya-five{width:4.75rem}.icon-maya-one{height:.75rem;width:.75rem}}.icon{-webkit-transform:scale(1);transform:scale(1);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.animate{-webkit-transform:scale(.9);transform:scale(.9);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}path.current-color{stroke:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['name',] }] }
    ]; };
    IconComponent.propDecorators = {
        size: [{ type: Input }],
        type: [{ type: Input }],
        classList: [{ type: Input }]
    };
    return IconComponent;
}());
export { IconComponent };
if (false) {
    /** @type {?} */
    IconComponent.prototype.size;
    /** @type {?} */
    IconComponent.prototype.type;
    /** @type {?} */
    IconComponent.prototype.classList;
    /** @type {?} */
    IconComponent.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUtqRDtJQU9FLHVCQUU0QixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7UUFJL0IsU0FBSSxHQUFjLElBQUksQ0FBQzs7UUFHdkIsU0FBSSxHQUFjLGFBQWEsQ0FBQzs7UUFHaEMsY0FBUyxHQUFhLEVBQUUsQ0FBQztJQVQvQixDQUFDO0lBV0osc0JBQVcscUNBQVU7Ozs7UUFBckI7WUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xELHdCQUNLLElBQUksQ0FBQyxTQUFTO29CQUNqQixJQUFJLENBQUMsSUFBSTtvQkFDVCxNQUFNO29CQUNOLFVBQVU7b0JBQ1YsVUFBUSxJQUFJLENBQUMsSUFBTTttQkFDbkI7YUFDSDtZQUNELHdCQUNLLElBQUksQ0FBQyxTQUFTO2dCQUNqQixJQUFJLENBQUMsSUFBSTtnQkFDVCxNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsVUFBUSxJQUFJLENBQUMsSUFBTTtlQUNuQjtRQUNKLENBQUM7OztPQUFBOzs7OztJQUVNLG1DQUFXOzs7O0lBQWxCLFVBQW1CLElBQVk7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUFzQixJQUFNLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHFLQUFvQztvQkFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs2Q0FJSSxTQUFTLFNBQUMsTUFBTTs7O3VCQUlsQixLQUFLO3VCQUdMLEtBQUs7NEJBR0wsS0FBSzs7SUEyQlIsb0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXhDWSxhQUFhOzs7SUFPeEIsNkJBQWdDOztJQUdoQyw2QkFBeUM7O0lBR3pDLGtDQUFrQzs7SUFWaEMsNkJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQXR0cmlidXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uU291cmNlcywgSWNvblNvdXJjZSB9IGZyb20gJy4vaWNvbic7XG5cbnR5cGUgSWNvblNpemVzID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xudHlwZSBJY29uVHlwZXMgPSAnbWF5YS1udW1iZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdraW5hbS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBJY29uIG5hbWUuXG4gICAgQEF0dHJpYnV0ZSgnbmFtZScpIHB1YmxpYyBuYW1lOiBzdHJpbmdcbiAgKSB7fVxuXG4gIC8vIEljb24gc2l6ZS5cbiAgQElucHV0KCkgc2l6ZTogSWNvblNpemVzID0gJ3NtJztcblxuICAvLyBJY29uIHR5cGUuXG4gIEBJbnB1dCgpIHR5cGU6IEljb25UeXBlcyA9ICdtYXlhLW51bWJlcic7XG5cbiAgLy8gSWNvbiB0eXBlLlxuICBASW5wdXQoKSBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgcHVibGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmdldEljb25UeXBlKHRoaXMubmFtZSkgPT09IEljb25Tb3VyY2UuQ3NzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi50aGlzLmNsYXNzTGlzdCxcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICBgaWNvbmAsXG4gICAgICAgIGBjc3MtaWNvbmAsXG4gICAgICAgIGBpY29uLSR7dGhpcy5uYW1lfWBcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAuLi50aGlzLmNsYXNzTGlzdCxcbiAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICdpY29uJyxcbiAgICAgICdzdmctaWNvbicsXG4gICAgICBgaWNvbi0ke3RoaXMubmFtZX1gXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJY29uVHlwZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIUljb25Tb3VyY2VzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgaWNvbiAke25hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBJY29uU291cmNlc1tuYW1lXTtcbiAgfVxufVxuIl19