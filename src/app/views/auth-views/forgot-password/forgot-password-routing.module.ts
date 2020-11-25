import { CanActivateService } from './../../../shared/services/guard-services/can-activate.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';


const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    canActivate: [CanActivateService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
