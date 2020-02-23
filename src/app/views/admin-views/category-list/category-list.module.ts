import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryListRoutingModule } from './category-list-routing.module';
import{CategoryListComponent} from './category-list.component'
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    SharedModule,
  ]
})
export class CategoryListModule { }
