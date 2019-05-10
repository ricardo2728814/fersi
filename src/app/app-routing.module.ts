import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'c', loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'product/:id', loadChildren: './shared/shared.module#SharedModule' },
  { path: '', redirectTo: 'c', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
