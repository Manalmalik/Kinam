
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Material
 */
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const MATERIAL_IMPORTS = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
];
/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    ReactiveFormsModule,
    ...MATERIAL_IMPORTS,
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    ...MATERIAL_IMPORTS,
  ],
})
export class SharedModule { }
