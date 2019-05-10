import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "product/:id", component:ProductFormComponent, canActivate:[AuthGuardService]},
  {path: "product", component:ProductFormComponent, canActivate:[AuthGuardService]},
  {path: "products", component:ProductListComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
