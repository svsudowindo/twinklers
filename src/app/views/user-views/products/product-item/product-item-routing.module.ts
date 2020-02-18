import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductItemRoutingModule { }
