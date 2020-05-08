import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public count:any = {};
  constructor(private commonRequestService: CommonRequestService) { }

  ngOnInit() {
    this.getCategoryList();
  }


  private getCategoryList() {
    this.commonRequestService.request(RequestEnums.DASHBOARD_COUNT_LIST).subscribe(res => { 
    this.count = res.data;
    });
  }

}
