import { NgModule } from '@angular/core';
import { GetReadingComponent } from './readings.component';
import { CoreModule } from 'core';

@NgModule({
    declarations: [GetReadingComponent],
    imports: [CoreModule],
    exports: [GetReadingComponent]
})
export class ReadingsModule { }

