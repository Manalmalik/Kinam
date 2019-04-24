import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Material
 */
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

/**
 * Implementation for the icon logic.
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule {}
