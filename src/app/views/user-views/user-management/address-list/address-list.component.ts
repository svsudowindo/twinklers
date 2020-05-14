import { Component, OnInit } from '@angular/core';
import { ModifyAddressComponent } from './modify-address/modify-address.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import Utils from 'src/app/shared/services/common/utils';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';

@Component({ 
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
 
  public userInfo:any;
  constructor(private modalService: NgbModal, private commonServices:CommonService, private commonRequestService: CommonRequestService) { 
    this.userInfo = commonServices.getUserInfo();
    console.log(this.userInfo)
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(ModifyAddressComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static',
      scrollable: true 
    });
    modalRef.componentInstance.addresses = this.userInfo.addresses[0];
    modalRef.componentInstance.emitAddress.subscribe((receivedEntry) => {
      console.log(receivedEntry);
      this.userInfo.addresses[0] = receivedEntry; 
      this.commonRequestService.request(RequestEnums.UPDATE_USER_PROFILE,this.userInfo).subscribe(res => {
        this.commonServices.setUserInfo(this.userInfo); 
      });
      });
  }
}
