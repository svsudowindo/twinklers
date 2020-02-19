import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofCategoryComponent } from './listof-category.component';


const routes: Routes = [
  {
    path:'',
    component:ListofCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListofCategoryRoutingModule { }
