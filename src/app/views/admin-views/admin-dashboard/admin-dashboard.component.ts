import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import Utils from 'src/app/shared/services/common/utils';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  dashboardData = [
    {
      label: 'Categories',
      key: 'category',
      route: 'category-list'
    },
    {
      label: 'Products',
      key: 'products',
      route: 'products-list'
    },
    {
      label: 'Users',
      key: 'users',
      route: ''
    }
  ];
  dashboardResponse: any;
  constructor(
    private commonRequestService: CommonRequestService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getDashboardInfo()
  }
  getDashboardInfo() {
    this.commonRequestService.request(RequestEnums.GET_DASHBOARD_DATA).subscribe(res => {
      if (res.status === 200 && Utils.isValidInput(res.data)) {
        this.dashboardResponse = res.data;
      } else {
        alert('Something went wrong');
      }
    })
  }

  navigateToDashboardItem(dashboradData) {
    this.router.navigate(['admin', dashboradData.route])
  }
}
