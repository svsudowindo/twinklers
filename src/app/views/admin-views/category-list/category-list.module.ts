import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CategoryListRoutingModule } from './category-list-routing.module';
import{CategoryListComponent} from './category-list.component'
import { SharedModule } from 'src/app/shared/shared/shared.module';
import{ CategoryComponent} from "../category/category.component"



@NgModule({
  declarations: [CategoryListComponent,CategoryComponent
],
  imports: [
    CommonModule,
    CategoryListRoutingModule,
    SharedModule,NgbModule
  ],
  exports: [CategoryListComponent],
  bootstrap: [CategoryListComponent],
  entryComponents: [CategoryComponent]
})
export class CategoryListModule { }
