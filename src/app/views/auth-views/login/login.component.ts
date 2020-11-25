import { TopbarService } from 'src/app/shared/shared/components/topbar/topbar.service';
import { LOCAL_STORAGE_ENUMS } from './../../../shared/constants/local-storage-enums';
import { Router } from '@angular/router';
import { RequestEnums } from './../../../shared/constants/request-enums';
import { CommonRequestService } from './../../../shared/services/http/common-request.service';
import { StorageService } from './../../../shared/services/storage/storage.service';
import { VALIDATION_PATTERNS } from './../../../shared/constants/validation-patterns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/shared/services/common/utils';
import { BaseClass } from 'src/app/shared/services/common/baseClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
    email: [
      {type: 'required', message: 'Email is Required'},
      {type: 'pattern', message: 'Enter Valid Email'}
    ],
    password: [
      {type: 'required', message: 'Password is Required'}
    ]
  };
  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private commonRequestService: CommonRequestService,
    private router: Router,
    private topbarService: TopbarService
  ) {
    super();
  }

  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(VALIDATION_PATTERNS.EMAIL)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    this.commonRequestService.request(RequestEnums.LOGIN, this.loginForm.value).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        this.storageService.setLocalStorageItem(LOCAL_STORAGE_ENUMS.USERINFO, res.data);
        const userinfo = Utils.avoidShallowClone(this.storageService.getLocalStorageItem(LOCAL_STORAGE_ENUMS.USERINFO));
        console.log(JSON.parse(userinfo));
        this.topbarService.setUserInfoChange(true);
        this.router.navigate(['dashboard']);
      }
    });
  }
}
