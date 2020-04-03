import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twinklers';
  constructor(private httpClient: HttpClient){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('api-token', 'wRgD_XjN8begt0Vfn-Py1qvbc-40ppzWROzxHlKHUOYtTRBz6Dk1kHemObNkiaNG9WU');
    headers = headers.append('user-email', 'saichoclate68@gmail.com');
    this.httpClient.get('https://www.universal-tutorial.com/api/getaccesstoken', {headers}).subscribe(res => {
      console.log(res['auth_token']);
      let authTokenHeaders: HttpHeaders =  new HttpHeaders();
      authTokenHeaders = authTokenHeaders.append('Authorization', 'Bearer ' + res['auth_token']);
      authTokenHeaders = authTokenHeaders.append('Accept', 'application/json');
      // for countries = https://www.universal-tutorial.com/api/countries
      // for states =   https://www.universal-tutorial.com/api/states/{name}
      // for cities = https://www.universal-tutorial.com/api/cities/Alaska
      this.httpClient.get('https://www.universal-tutorial.com/api/cities/Telangana', {headers: authTokenHeaders}).subscribe(countries => {
        console.log(countries);
      });
    });
  }
}
