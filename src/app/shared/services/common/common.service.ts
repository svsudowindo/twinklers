import { Router } from '@angular/router';
import { LOCAL_STORAGE_ENUMS } from './../../constants/local-storage-enums';
import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import Utils from './utils';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private httpClient:HttpClient
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

 public getCountries():Observable<any>{ 
    let authTokenHeaders: HttpHeaders =  new HttpHeaders();
    authTokenHeaders = authTokenHeaders.append('Authorization', 'Bearer ' +  localStorage.getItem('contries_token'));
    authTokenHeaders = authTokenHeaders.append('Accept', 'application/json'); 
    return this.httpClient.get('https://www.universal-tutorial.com/api/countries', {headers: authTokenHeaders}); 
 }

 public getStates(state):Observable<any>{ 
  let authTokenHeaders: HttpHeaders =  new HttpHeaders();
  authTokenHeaders = authTokenHeaders.append('Authorization', 'Bearer ' +  localStorage.getItem('contries_token'));
  authTokenHeaders = authTokenHeaders.append('Accept', 'application/json'); 
  return this.httpClient.get('https://www.universal-tutorial.com/api/states/'+state, {headers: authTokenHeaders}); 
}

public getCities(city):Observable<any>{ 
  let authTokenHeaders: HttpHeaders =  new HttpHeaders();
  authTokenHeaders = authTokenHeaders.append('Authorization', 'Bearer ' +  localStorage.getItem('contries_token'));
  authTokenHeaders = authTokenHeaders.append('Accept', 'application/json'); 
  return this.httpClient.get('https://www.universal-tutorial.com/api/cities/'+city, {headers: authTokenHeaders}); 
}

}
