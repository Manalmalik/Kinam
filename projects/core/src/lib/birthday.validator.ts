import { Validators } from '@angular/forms';

export const YEAR_MIN = 1900;
export const YEAR_MAX = 2099;

export const BIRTDAY_VALIDATORS = {
    year: [
        Validators.required,
        Validators.min(YEAR_MIN),
        Validators.max(YEAR_MAX),
        Validators.minLength(4),
        Validators.maxLength(4),
    ],
    month: [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
        Validators.minLength(1),
        Validators.maxLength(2),
    ],
    day: [
        Validators.required,
        Validators.min(1),
        Validators.max(31),
        Validators.minLength(1),
        Validators.maxLength(2),
    ]
};
