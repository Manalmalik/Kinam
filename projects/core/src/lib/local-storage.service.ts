import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    public set(key: string, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    public get(key: string) {
        const item = localStorage.getItem(key);
        if (item) {
            if (typeof item === 'string') {
                return item;
            }
        }
    }
}
