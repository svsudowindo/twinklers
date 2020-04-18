import { LOCAL_STORAGE_ENUMS } from './../../constants/local-storage-enums';
import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import Utils from './utils';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private storageService: StorageService
  ) { }

  public getUserInfo() {
    const userInfo = this.storageService.getLocalStorageItem(LOCAL_STORAGE_ENUMS.USERINFO);
    console.log(userInfo);
    if (userInfo) {
      return JSON.parse(Utils.avoidShallowClone(userInfo));
    } else {
      return null;
    }
  }
}
