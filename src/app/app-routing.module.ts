import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/user-views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./views/user-views/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'my-account/login',
    loadChildren: () => import('./views/auth-views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'my-account/registration',
    loadChildren: () => import('./views/auth-views/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'my-account/forgot-password',
    loadChildren: () => import('./views/auth-views/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./views/admin-views/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'listof-category',
    loadChildren: () => import('./views/admin-views/listof-category/listof-category.module').then(m => m.ListofCategoryModule)
  },
  {
    path: '**',
    loadChildren: () => import('./views/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
