import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsListRoutingModule } from './admin-products-list-routing.module';
import { AdminProductsListComponent } from './admin-products-list.component';


@NgModule({
  declarations: [AdminProductsListComponent],
  imports: [
    CommonModule,
    AdminProductsListRoutingModule
  ]
})
export class AdminProductsListModule { }
