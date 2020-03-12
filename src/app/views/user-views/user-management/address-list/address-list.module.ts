import { AddressListComponent } from './address-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressListRoutingModule } from './address-list-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ModifyAddressComponent } from './modify-address/modify-address.component';


@NgModule({
  declarations: [AddressListComponent, ModifyAddressComponent],
  imports: [
    CommonModule,
    AddressListRoutingModule,
    SharedModule
  ],
  exports: [AddressListComponent],
  bootstrap: [AddressListComponent],
  entryComponents: [ModifyAddressComponent]
})
export class AddressListModule { }
