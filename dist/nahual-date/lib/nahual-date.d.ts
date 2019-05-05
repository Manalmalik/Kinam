declare const isValidDate: (date: string | Date) => boolean;
declare class KinamNahual {
    nahualName: string;
    nahualDay: number;
    daySign: string;
    image: string;
    date: Date;
    label: string;
    constructor(date?: Date);
    update(date: Date): void;
    format(customFormat?: string): string;
    readonly day: number;
    readonly month: number;
    readonly year: number;
}
declare const kinamNahual: (date: Date) => KinamNahual;
declare const asObservable: (date: Date) => import("rxjs").Observable<KinamNahual>;
export { kinamNahual, KinamNahual, isValidDate, asObservable };
