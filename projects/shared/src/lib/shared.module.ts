
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Material
 */
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule { }
