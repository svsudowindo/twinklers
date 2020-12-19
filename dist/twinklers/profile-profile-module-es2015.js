(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n    <div class=\"card m-t-50\" style=\"width: 22rem;\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-center\">\r\n                <div>\r\n                    <input type=\"file\" id=\"img\" hidden (change)=\"profileChange($event)\" accept=\".png, .jpg, .jpeg\" multiple>\r\n                    <label for=\"img\">\r\n                        <img [src]=\"profileImage\" class=\"img\" (error)=\"imgError()\"/>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUserProfile()\">\r\n                <div class=\"form-group h-px-75\">\r\n                        <label for=\"registerEmail\">First name </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\r\n                        <p class=\"error\" *ngIf=\"isValidField(profileForm, 'firstName')\">\r\n                            {{getErrorMessage(profileForm, validationMessages, 'firstName')}}\r\n                        </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\"> Last name </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'lastName')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'lastName')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\">Email </label>\r\n                    <input type=\"email\" class=\"form-control\" readonly id=\"registerEmail\" formControlName=\"email\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'email')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'email')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerPhonenumber\">Phone Number</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"registerPhonenumber\" formControlName=\"phoneNumber\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'phoneNumber')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'phoneNumber')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"size\" class=\"form-group h-px-75\" formGroupName=\"gender\">\r\n                    <select class=\"custom-select\" formControlName=\"gender_id\" required>\r\n                        <option value=\"\">Select Gender</option>\r\n                        <option [value]=\"gender.gender_id\" *ngFor=\"let gender of gendersList\">{{gender.name}}</option>\r\n                    </select>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm.get('gender'), 'gender_id')\">\r\n                        {{getErrorMessage(profileForm.get('gender'), validationMessages, 'gender_id')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileForm.invalid\">Update</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/views/user-views/user-management/profile/profile-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/profile/profile-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/user-views/user-management/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/views/user-views/user-management/profile/profile.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/profile/profile.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvcHJvZmlsZS9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHZpZXdzXFx1c2VyLXZpZXdzXFx1c2VyLW1hbmFnZW1lbnRcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSIsIi5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/user-views/user-management/profile/profile.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/profile/profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/common/baseClass */ "./src/app/shared/services/common/baseClass.ts");
/* harmony import */ var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/common/common.service */ "./src/app/shared/services/common/common.service.ts");
/* harmony import */ var _shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/constants/validation-patterns */ "./src/app/shared/constants/validation-patterns.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");










let ProfileComponent = class ProfileComponent extends _shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(commonRequestService, formBuilder, commonService) {
        super();
        this.commonRequestService = commonRequestService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.gendersList = [];
        this.validationMessages = {
            firstName: [
                { type: 'required', message: 'First Name is required' }
            ],
            lastName: [
                { type: 'required', message: 'Last Name is required' }
            ],
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter Valid Email Address' }
            ],
            phoneNumber: [
                { type: 'required', message: 'Phone Number is required' },
                { type: 'pattern', message: 'Enter Valid Phone Number' }
            ],
            gender_id: [
                { type: 'required', message: 'Gender is required' }
            ]
        };
        this.profileImage = '/assets/images/profile/default-profile.jpg';
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
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_4__["VALIDATION_PATTERNS"].EMAIL)])],
            profilePicture: [null],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_4__["VALIDATION_PATTERNS"].PHONE)])],
            role: this.formBuilder.group({
                role_id: 2
            }),
            gender: this.formBuilder.group({
                gender_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
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
    getGenders() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].GET_GENDER_LIST).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                this.gendersList = res.data;
            }
        });
    }
    updateUserProfile() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].UPDATE_USER_PROFILE, this.profileForm.value).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                this.commonService.setUserInfo(res.data);
            }
        });
    }
    profileChange(ev) {
        console.log(ev.target.files);
        const formData = new FormData();
        const files = ev.target.files;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
        }
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' });
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].UPLOAD_IMAGE_GET_URL, formData, null, headers).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
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
};
ProfileComponent.ctorParameters = () => [
    { type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_7__["CommonRequestService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/views/user-views/user-management/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/views/user-views/user-management/profile/profile.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/profile/profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/views/user-views/user-management/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/user-views/user-management/profile/profile.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map