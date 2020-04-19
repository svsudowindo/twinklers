import { Router } from '@angular/router';
import { BaseClass } from './../../../../shared/services/common/baseClass';
import { CommonService } from './../../../../shared/services/common/common.service';
import { VALIDATION_PATTERNS } from './../../../../shared/constants/validation-patterns';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestEnums } from './../../../../shared/constants/request-enums';
import { CommonRequestService } from './../../../../shared/services/http/common-request.service';
import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseClass implements OnInit {
  gendersList = [];
  profileForm: FormGroup;

  validationMessages = {
    firstName: [
      {type: 'required', message: 'First Name is required'}
    ],
    lastName: [
      {type: 'required', message: 'Last Name is required'}
    ],
    email: [
      {type: 'required', message: 'Email is required'},
      { type: 'pattern', message: 'Enter Valid Email Address'}
    ],
    phoneNumber: [
      {type: 'required', message: 'Phone Number is required'},
      { type: 'pattern', message: 'Enter Valid Phone Number'}

    ],
    gender_id: [
      {type: 'required', message: 'Gender is required'}
    ]
  };
  userInfo: any;
  profileImage = '/assets/images/profile/pic.jpg';
  constructor(
    private commonRequestService: CommonRequestService,
    private formBuilder: FormBuilder,
    private commonService: CommonService
    ) {
    super();
    this.commonService.checkAndLogout();
    this.userInfo = this.commonService.getUserInfo();
  }

  ngOnInit() {
    this.getGenders();
    this.initProfileForm();
  }

  initProfileForm() {
    this.profileForm = this.formBuilder.group({
      _id: [null],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(VALIDATION_PATTERNS.EMAIL)])],
      profilePicture: [null],
      phoneNumber: [null, Validators.compose([Validators.required, Validators.pattern(VALIDATION_PATTERNS.PHONE)])],
      role: this.formBuilder.group({
        role_id: 2
      }),
      gender: this.formBuilder.group({
        gender_id: ['', Validators.compose([Validators.required])]
      }),
      addresses: this.formBuilder.array([])
    });
    this.prefillUserInfo();
  }
  prefillUserInfo() {
    this.profileForm.patchValue(this.userInfo);
  }
  /**
   * Get gender list
   */
  private getGenders() {
    this.commonRequestService.request(RequestEnums.GET_GENDER_LIST).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        this.gendersList = res.data;
      }
    });
  }

  updateUserProfile() {
    this.commonRequestService.request(RequestEnums.UPDATE_USER_PROFILE, this.profileForm.value).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        alert('Updated Successfully');
        this.commonService.setUserInfo(res.data);
      }
    });
  }

  profileChange() {
    
  }
}
