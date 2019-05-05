/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { IconSources, IconSource } from './icon';
export class IconComponent {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        // Icon size.
        this.size = 'sm';
        // Icon type.
        this.type = 'maya-number';
        // Icon type.
        this.classList = [];
    }
    /**
     * @return {?}
     */
    get cssClasses() {
        if (this.getIconType(this.name) === IconSource.Css) {
            return [
                ...this.classList,
                this.size,
                `icon`,
                `css-icon`,
                `icon-${this.name}`
            ];
        }
        return [
            ...this.classList,
            this.size,
            'icon',
            'svg-icon',
            `icon-${this.name}`
        ];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getIconType(name) {
        if (!IconSources[name]) {
            throw new Error(`Couldn't find icon ${name}`);
        }
        return IconSources[name];
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'kinam-icon',
                template: "<div\n  kinamIcon\n  class=\"icon\"\n  [customClasses]=\"cssClasses\"\n  [name]=\"name\"\n  [type]=\"getIconType(name)\"\n  [animate]=\"true\"\n></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;justify-content:center;align-items:center}.icon-maya-five,.icon-maya-one{height:1rem;width:1rem;background-color:currentColor;border-radius:1rem;margin:.25rem;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.icon-maya-five{width:6rem;min-width:4.75rem;display:block;height:.75rem;margin:.25rem auto}.icon-maya-one{width:1rem;min-width:.5rem;display:inline-block}.icon-maya-zero{display:flex;width:5rem;height:3rem}@media only screen and (max-width:600px){.icon-maya-five,.icon-maya-one{margin:.125rem}.icon-maya-five{width:4.75rem}.icon-maya-one{height:.75rem;width:.75rem}}.icon{-webkit-transform:scale(1);transform:scale(1);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.animate{-webkit-transform:scale(.9);transform:scale(.9);transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}path.current-color{stroke:currentColor}"]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['name',] }] }
];
IconComponent.propDecorators = {
    size: [{ type: Input }],
    type: [{ type: Input }],
    classList: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3JlLyIsInNvdXJjZXMiOlsibGliL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBV2pELE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3hCLFlBRTRCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFROztRQUkvQixTQUFJLEdBQWMsSUFBSSxDQUFDOztRQUd2QixTQUFJLEdBQWMsYUFBYSxDQUFDOztRQUdoQyxjQUFTLEdBQWEsRUFBRSxDQUFDO0lBVC9CLENBQUM7Ozs7SUFXSixJQUFXLFVBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2xELE9BQU87Z0JBQ0wsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFDakIsSUFBSSxDQUFDLElBQUk7Z0JBQ1QsTUFBTTtnQkFDTixVQUFVO2dCQUNWLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTthQUNwQixDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsR0FBRyxJQUFJLENBQUMsU0FBUztZQUNqQixJQUFJLENBQUMsSUFBSTtZQUNULE1BQU07WUFDTixVQUFVO1lBQ1YsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHFLQUFvQztnQkFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O3lDQUlJLFNBQVMsU0FBQyxNQUFNOzs7bUJBSWxCLEtBQUs7bUJBR0wsS0FBSzt3QkFHTCxLQUFLOzs7O0lBTk4sNkJBQWdDOztJQUdoQyw2QkFBeUM7O0lBR3pDLGtDQUFrQzs7SUFWaEMsNkJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQXR0cmlidXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uU291cmNlcywgSWNvblNvdXJjZSB9IGZyb20gJy4vaWNvbic7XG5cbnR5cGUgSWNvblNpemVzID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xudHlwZSBJY29uVHlwZXMgPSAnbWF5YS1udW1iZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdraW5hbS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBJY29uIG5hbWUuXG4gICAgQEF0dHJpYnV0ZSgnbmFtZScpIHB1YmxpYyBuYW1lOiBzdHJpbmdcbiAgKSB7fVxuXG4gIC8vIEljb24gc2l6ZS5cbiAgQElucHV0KCkgc2l6ZTogSWNvblNpemVzID0gJ3NtJztcblxuICAvLyBJY29uIHR5cGUuXG4gIEBJbnB1dCgpIHR5cGU6IEljb25UeXBlcyA9ICdtYXlhLW51bWJlcic7XG5cbiAgLy8gSWNvbiB0eXBlLlxuICBASW5wdXQoKSBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgcHVibGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmdldEljb25UeXBlKHRoaXMubmFtZSkgPT09IEljb25Tb3VyY2UuQ3NzKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi50aGlzLmNsYXNzTGlzdCxcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICBgaWNvbmAsXG4gICAgICAgIGBjc3MtaWNvbmAsXG4gICAgICAgIGBpY29uLSR7dGhpcy5uYW1lfWBcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAuLi50aGlzLmNsYXNzTGlzdCxcbiAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICdpY29uJyxcbiAgICAgICdzdmctaWNvbicsXG4gICAgICBgaWNvbi0ke3RoaXMubmFtZX1gXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJY29uVHlwZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIUljb25Tb3VyY2VzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgaWNvbiAke25hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiBJY29uU291cmNlc1tuYW1lXTtcbiAgfVxufVxuIl19