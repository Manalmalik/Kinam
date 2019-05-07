import { NgModule } from '@angular/core';
import { CmsBlockComponent } from './cms-block';
import { CmsParagraphComponent } from './cms-paragraph';
import { CmsImageComponent } from './cms-image';
import { SharedModule } from 'shared';

@NgModule({
    imports: [SharedModule],
    declarations: [CmsBlockComponent, CmsParagraphComponent, CmsImageComponent],
    exports: [CmsBlockComponent, CmsParagraphComponent, CmsImageComponent],
})
export class CmsModule { }