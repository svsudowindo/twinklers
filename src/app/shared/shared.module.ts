import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CustomModule } from './modules/custom/custom.module';
import { PredefinedModule } from './modules/predefined/predefined.module';


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    CustomModule,
    PredefinedModule
  ],
  exports: [
    CustomModule,
    PredefinedModule
  ]
})
export class SharedModule { }
