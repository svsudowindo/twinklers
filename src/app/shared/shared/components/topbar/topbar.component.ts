import { CommonService } from './../../../services/common/common.service';
import { Component, OnInit } from '@angular/core';
import { TopbarService } from './topbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  totalCartCount = 0;
  currentUser: any;
  constructor(
    private topbarService: TopbarService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.topbarService.cartCountSubject.subscribe(res => {
      this.totalCartCount = res;
    });
    this.topbarService.userInfoChanged.subscribe(res => {
        this.currentUser = this.commonService.getUserInfo();
    });
  }

  ngOnInit() {
  }

  navigateToMyAccount() {
    this.router.navigate(['my-account', 'login']);
  }
  logout() {
    localStorage.clear();
    this.topbarService.setUserInfoChange(true);
    this.router.navigate(['dashboard']);
  }
}
