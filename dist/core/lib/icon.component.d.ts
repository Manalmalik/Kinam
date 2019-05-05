declare type IconSizes = 'sm' | 'md' | 'lg';
declare type IconTypes = 'maya-number';
export declare class IconComponent {
    name: string;
    constructor(name: string);
    size: IconSizes;
    type: IconTypes;
    classList: string[];
    readonly cssClasses: string[];
    getIconType(name: string): any;
}
export {};
