import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Important:
 * This is the project root.
 * We do not actually build this app, it is a playground.
 * See 'projects/website' for landing page
 */

const routes: Routes = [{ path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
