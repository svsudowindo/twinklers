import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemRoutingModule } from './product-item-routing.module';
import { ProductItemComponent } from './product-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductItemRoutingModule,
    SharedModule
  ]
})
export class ProductItemModule { }
