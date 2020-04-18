import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import Utils from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {
  constructor(
    private router: Router,
    private commonService: CommonService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userInfo = this.commonService.getUserInfo();
    console.log(userInfo);
    if (Utils.isValidInput(userInfo) && Utils.isValidInput(userInfo.authToken)) {
      this.router.navigate(['my-account', 'user-management']);
    } else {
      return true;
    }
  }
}
