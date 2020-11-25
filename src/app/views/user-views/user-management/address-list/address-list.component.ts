import { Component, OnInit } from '@angular/core';
import { ModifyAddressComponent } from './modify-address/modify-address.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({ 
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
 

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(ModifyAddressComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      scrollable: true 
    });
    modalRef.componentInstance.name = 'World';
  }
}
