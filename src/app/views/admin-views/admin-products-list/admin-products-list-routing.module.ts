import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsListComponent } from './admin-products-list.component';

const routes: Routes = [
 {
   path: '',
   children:[
    {
      path: '',
      component: AdminProductsListComponent,
    },
    {
      path: 'create-product',
      loadChildren: () => import('./admin-modify-product/admin-modify-product.module').then(m=>m.AdminModifyProductModule)
    }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductsListRoutingModule { }
