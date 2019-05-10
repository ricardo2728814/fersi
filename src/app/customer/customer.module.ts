import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatGridListModule,
  ]
})
export class CustomerModule { }
