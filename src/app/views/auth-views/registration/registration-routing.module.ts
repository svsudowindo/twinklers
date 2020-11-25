import { CanActivateService } from './../../../shared/services/guard-services/can-activate.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';


const routes: Routes = [
  {
    path:'',
    component:RegistrationComponent,
    canActivate: [CanActivateService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
