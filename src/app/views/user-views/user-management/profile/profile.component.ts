import { HttpHeaders } from '@angular/common/http';
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
  profileImage = '/assets/images/profile/default-profile.jpg';
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
    this.profileImage = this.userInfo.profilePicture;
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
        this.commonService.setUserInfo(res.data);
      }
    });
  }

  profileChange(ev) {
    console.log(ev.target.files);
    const formData = new FormData();
    const files = ev.target.files as Array<File>;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i], files[i].name);
    }
    const headers = new HttpHeaders({'Content-Type':'multipart/form-data'});
    this.commonRequestService.request(RequestEnums.UPLOAD_IMAGE_GET_URL, formData, null, headers).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        alert('Updated Successfully');
        this.profileImage = res.data.fileUrl;
        this.profileForm.get('profilePicture').setValue(this.profileImage);
        this.updateUserProfile();
      }
    });
  }

  imgError() {
    console.log('img error');
    this.profileImage = '/assets/images/profile/default-profile.jpg';
  }
}
