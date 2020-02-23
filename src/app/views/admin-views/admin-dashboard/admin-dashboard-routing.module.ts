import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'category-list',
        loadChildren: () => import('../category-list/category-list.module').then(m => m.CategoryListModule)
      },
      {
        path: 'products-list',
        loadChildren: () => import('../admin-products-list/admin-products-list.module').then(m => m.AdminProductsListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
