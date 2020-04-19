import { Router } from '@angular/router';
import { LOCAL_STORAGE_ENUMS } from './../../constants/local-storage-enums';
import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import Utils from './utils';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  public getUserInfo() {
    const userInfo = this.storageService.getLocalStorageItem(LOCAL_STORAGE_ENUMS.USERINFO);
    if (userInfo) {
      return JSON.parse(Utils.avoidShallowClone(userInfo));
    } else {
      return null;
    }
  }

  public setUserInfo(input) {
    this.storageService.setLocalStorageItem(LOCAL_STORAGE_ENUMS.USERINFO, input);
  }

  public checkAndLogout() {
    const userInfo = this.getUserInfo();
    if (!Utils.isValidInput(userInfo)) {
      alert('something went rwrong please login and try');
      this.router.navigate(['my-account', 'login']);
    }
  }
}
