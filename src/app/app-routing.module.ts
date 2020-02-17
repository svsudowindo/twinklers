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
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'my-account/login',
    loadChildren:()=>import('./views/login/login.module').then(m =>m.LoginModule)
  },
  {
    path:'my-account/registration',
    loadChildren:()=>import('./views/registration/registration.module').then(m=>m.RegistrationModule)
  },
  {
    path:'my-account/forgotpassword',
    loadChildren:()=>import('./views/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path:'**',
    loadChildren:() => import('./views/page-not-found/page-not-found.module').then (m =>m.PageNotFoundModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
