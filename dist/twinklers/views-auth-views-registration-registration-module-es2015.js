(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-views-registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/registration/registration.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/registration/registration.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n    <div class=\"card m-t-50\" style=\"width: 22rem;\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n                <p class=\"custom\">Registration</p>\r\n            </div>\r\n            <br>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"userRegister()\">\r\n                <div class=\"form-group h-px-75\">\r\n                        <label for=\"registerEmail\">First name </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\r\n                        <p class=\"error\" *ngIf=\"isValidField(registerForm, 'firstName')\">\r\n                            {{getErrorMessage(registerForm, validationMessages, 'firstName')}}\r\n                        </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\"> Last name </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(registerForm, 'lastName')\">\r\n                        {{getErrorMessage(registerForm, validationMessages, 'lastName')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\">Email </label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"registerEmail\" formControlName=\"email\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(registerForm, 'email')\">\r\n                        {{getErrorMessage(registerForm, validationMessages, 'email')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerPhonenumber\">Phone Number</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"registerPhonenumber\" formControlName=\"phoneNumber\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(registerForm, 'phoneNumber')\">\r\n                        {{getErrorMessage(registerForm, validationMessages, 'phoneNumber')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"size\" class=\"form-group h-px-75\" formGroupName=\"gender\">\r\n                    <select class=\"custom-select\" formControlName=\"gender_id\" required>\r\n                        <option value=\"\">Select Gender</option>\r\n                        <option [value]=\"gender.gender_id\" *ngFor=\"let gender of gendersList\">{{gender.name}}</option>\r\n                    </select>\r\n                    <p class=\"error\" *ngIf=\"isValidField(registerForm.get('gender'), 'gender_id')\">\r\n                        {{getErrorMessage(registerForm.get('gender'), validationMessages, 'gender_id')}}\r\n                    </p>\r\n                </div>\r\n                <div>\r\n                    <label>\r\n                        <input type=\"checkbox\" formControlName=\"isTermsAndConditionsAccepted\"> I agree with terms & conditions</label>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"d-flex justify-content-start\">\r\n                        <a routerLink=\"/my-account/login\" class=\"btn btn-link \">Login</a>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end\">\r\n                        <a [routerLink]=\"['/my-account/forgot-password']\" class=\"btn btn-link\">Forgot Password?</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.invalid || !registerForm.get('isTermsAndConditionsAccepted').value\">Register</button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/views/auth-views/registration/registration-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/auth-views/registration/registration-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/guard-services/can-activate.service */ "./src/app/shared/services/guard-services/can-activate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.component */ "./src/app/views/auth-views/registration/registration.component.ts");





const routes = [
    {
        path: '',
        component: _registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        canActivate: [_shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateService"]]
    }
];
let RegistrationRoutingModule = class RegistrationRoutingModule {
};
RegistrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], RegistrationRoutingModule);



/***/ }),

/***/ "./src/app/views/auth-views/registration/registration.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/auth-views/registration/registration.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom {\n  font-size: medium;\n}\n\n.mydrop {\n  width: 100%;\n  color: black;\n}\n\n.size {\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC12aWV3cy9yZWdpc3RyYXRpb24vRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXBwXFx2aWV3c1xcYXV0aC12aWV3c1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgtdmlld3MvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC12aWV3cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbSB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLm15ZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNpemUge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59IiwiLmN1c3RvbSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ubXlkcm9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpemUge1xuICBoZWlnaHQ6IDQ1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/auth-views/registration/registration.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/auth-views/registration/registration.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");
/* harmony import */ var _shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/common/baseClass */ "./src/app/shared/services/common/baseClass.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/constants/validation-patterns */ "./src/app/shared/constants/validation-patterns.ts");









let RegistrationComponent = class RegistrationComponent extends _shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(injector, commonRequestService, formBuilder, router) {
        super();
        this.injector = injector;
        this.commonRequestService = commonRequestService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.gendersList = [];
        this.isTermsAndConditionsAccepted = false;
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
    }
    ngOnInit() {
        this.getGenders();
        this.initRegisterForm();
    }
    initRegisterForm() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(src_app_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_PATTERNS"].EMAIL)])],
            profilePicture: [null],
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(src_app_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["VALIDATION_PATTERNS"].PHONE)])],
            role: this.formBuilder.group({
                role_id: 2
            }),
            gender: this.formBuilder.group({
                gender_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])]
            }),
            addresses: this.formBuilder.array([]),
            isTermsAndConditionsAccepted: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])]
        });
    }
    /**
     * Get gender list
     */
    getGenders() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_2__["RequestEnums"].GET_GENDER_LIST).subscribe(res => {
            console.log(res);
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                this.gendersList = res.data;
            }
        });
    }
    userRegister() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_2__["RequestEnums"].REGISTER, this.registerForm.value).subscribe(res => {
            console.log(res);
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                alert('You have registered Successfully');
                this.router.navigate(['my-account', 'login']);
            }
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"] },
    { type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_3__["CommonRequestService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/views/auth-views/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/views/auth-views/registration/registration.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/auth-views/registration/registration.module.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/views/auth-views/registration/registration-routing.module.ts");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration.component */ "./src/app/views/auth-views/registration/registration.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let RegistrationModule = class RegistrationModule {
};
RegistrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], RegistrationModule);



/***/ })

}]);
//# sourceMappingURL=views-auth-views-registration-registration-module-es2015.js.map