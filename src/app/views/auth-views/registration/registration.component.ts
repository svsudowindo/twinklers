import { Router } from '@angular/router';
import { RequestEnums } from './../../../shared/constants/request-enums';
import { CommonRequestService } from './../../../shared/services/http/common-request.service';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { Component, OnInit, Injector } from '@angular/core';
import Utils from 'src/app/shared/services/common/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VALIDATION_PATTERNS } from 'src/app/shared/constants/validation-patterns';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseClass implements OnInit {
  gendersList = [];
  registerForm: FormGroup;
  isTermsAndConditionsAccepted = false;
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
  constructor(
    public injector: Injector,
    private commonRequestService: CommonRequestService,
    private formBuilder: FormBuilder,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.getGenders();
    this.initRegisterForm();
  }

  private initRegisterForm() {
    this.registerForm = this.formBuilder.group({
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
      addresses: this.formBuilder.array([]),
      isTermsAndConditionsAccepted: [null, Validators.compose([Validators.required])]
    });
  }

  /**
   * Get gender list
   */
  private getGenders() {
    this.commonRequestService.request(RequestEnums.GET_GENDER_LIST).subscribe(res => {
      console.log(res);
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

  userRegister() {
      this.commonRequestService.request(RequestEnums.REGISTER, this.registerForm.value).subscribe(res => {
        console.log(res);
        if (res.errors.length > 0) {
          // error
          return;
        } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
          // error
          return;
        } else {
          // success
          alert('You have registered Successfully');
          this.router.navigate(['my-account', 'login']);
        }
      });
  }

}
