import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsListRoutingModule } from './admin-products-list-routing.module';
import { AdminProductsListComponent } from './admin-products-list.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [AdminProductsListComponent],
  imports: [
    CommonModule,
    AdminProductsListRoutingModule,
    SharedModule
  ]
})
export class AdminProductsListModule { }
