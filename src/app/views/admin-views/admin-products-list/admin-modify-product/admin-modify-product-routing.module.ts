import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminModifyProductComponent} from './admin-modify-product.component' 

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: '',
        component: AdminModifyProductComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModifyProductRoutingModule { }
