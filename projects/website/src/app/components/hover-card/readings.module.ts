import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';

import { GetReadingComponent } from './readings.component';

@NgModule({
    declarations: [GetReadingComponent],
    exports: [GetReadingComponent],
    imports: [SharedModule],
})
export class ReadingsModule { }

