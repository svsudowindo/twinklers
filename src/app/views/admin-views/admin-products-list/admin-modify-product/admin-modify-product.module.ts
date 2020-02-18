import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModifyProductRoutingModule } from './admin-modify-product-routing.module';
import { AdminModifyProductComponent } from './admin-modify-product.component';


@NgModule({
  declarations: [AdminModifyProductComponent],
  imports: [
    CommonModule,
    AdminModifyProductRoutingModule
  ]
})
export class AdminModifyProductModule { }
