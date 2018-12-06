import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorybookComponent } from './routes/storybook/storybook.component';
import { PresentationComponent } from './modules/presentation/presentation.component';

const routes: Routes = [
  {
    path: '',
    component: StorybookComponent,
    children: [
      { path: '', component: PresentationComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
