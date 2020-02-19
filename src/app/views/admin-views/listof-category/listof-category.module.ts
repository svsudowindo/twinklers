import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListofCategoryRoutingModule } from './listof-category-routing.module';
import{ListofCategoryComponent} from './listof-category.component'


@NgModule({
  declarations: [ListofCategoryComponent],
  imports: [
    CommonModule,
    ListofCategoryRoutingModule
  ]
})
export class ListofCategoryModule { }
