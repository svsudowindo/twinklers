import { UserManagementComponent } from './user-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateService } from 'src/app/shared/services/guard-services/can-activate.service';


const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'address-list',
        loadChildren: () => import('./address-list/address-list.module').then(m => m.AddressListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
