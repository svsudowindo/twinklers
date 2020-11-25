import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModifyProductRoutingModule } from './admin-modify-product-routing.module';
import { AdminModifyProductComponent } from './admin-modify-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminModifyProductComponent],
  imports: [
    CommonModule,
    AdminModifyProductRoutingModule,
    SharedModule
  ]
})
export class AdminModifyProductModule { }
