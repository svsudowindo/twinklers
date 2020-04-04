import { AddressListComponent } from './address-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressListRoutingModule } from './address-list-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [AddressListComponent],
  imports: [
    CommonModule,
    AddressListRoutingModule,
    SharedModule
  ]
})
export class AddressListModule { }
