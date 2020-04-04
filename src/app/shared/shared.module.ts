import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModule } from './modules/custom/custom.module';
import { PredefinedModule } from './modules/predefined/predefined.module';


@NgModule({
  declarations: [
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
