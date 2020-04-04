import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { FrameURLService } from './frame-url.service';
import { Observable } from 'rxjs';
import Utils from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class CommonRequestService {

  constructor(
    private frameUrlService: FrameURLService,
    private commonHttpService: CommonHttpService
    ) { }

  request(requestObject, postBody = null, httpParams = null, customHeaders = null): Observable<any> {
    return this.mainRequest(Utils.avoidShallowClone(requestObject), postBody, httpParams, customHeaders);
  }
  mainRequest(requestObject, postBody = null, httpParams = null, customHeaders = null): Observable<any> {
    requestObject.path = this.frameUrlService.getHttpFramedURL(requestObject);
    return this.commonHttpService.sendReciveService(requestObject, postBody, httpParams, customHeaders);
  }
}
