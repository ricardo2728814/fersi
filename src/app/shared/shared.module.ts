import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
} from "@angular/material";
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ], exports: [
    NavbarComponent,
  ]
})
export class SharedModule { }
