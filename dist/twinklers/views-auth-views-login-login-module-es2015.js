(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-views-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n    <div class=\"card m-t-50\" style=\"width: 22rem;\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n                <p class=\"custom\">Login</p>\r\n            </div>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"loginEmail1\">Email </label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"loginEmail1\" formControlName=\"email\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(loginForm, 'email')\">\r\n                        {{getErrorMessage(loginForm, validationMessages, 'email')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"loginPassword\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"loginPassword\" formControlName=\"password\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(loginForm, 'password')\">\r\n                        {{getErrorMessage(loginForm, validationMessages, 'password')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"d-flex justify-content-start\">\r\n                        <a routerLink=\"/my-account/registration\" class=\"btn btn-link \">Registration</a>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-end\">\r\n                        <a routerLink=\"/my-account/forgot-password\" class=\"btn btn-link\">Forgot Password?</a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/views/auth-views/login/login-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/auth-views/login/login-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/guard-services/can-activate.service */ "./src/app/shared/services/guard-services/can-activate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth-views/login/login.component.ts");





const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateService"]]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/views/auth-views/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/auth-views/login/login.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC12aWV3cy9sb2dpbi9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHZpZXdzXFxhdXRoLXZpZXdzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgtdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC12aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20ge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn0iLCIuY3VzdG9tIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59Il19 */");

/***/ }),

/***/ "./src/app/views/auth-views/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth-views/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_components_topbar_topbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared/components/topbar/topbar.service */ "./src/app/shared/shared/components/topbar/topbar.service.ts");
/* harmony import */ var _shared_constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/constants/local-storage-enums */ "./src/app/shared/constants/local-storage-enums.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");
/* harmony import */ var _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/storage/storage.service */ "./src/app/shared/services/storage/storage.service.ts");
/* harmony import */ var _shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../shared/constants/validation-patterns */ "./src/app/shared/constants/validation-patterns.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");
/* harmony import */ var src_app_shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/common/baseClass */ "./src/app/shared/services/common/baseClass.ts");












let LoginComponent = class LoginComponent extends src_app_shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_11__["BaseClass"] {
    constructor(formBuilder, storageService, commonRequestService, router, topbarService) {
        super();
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.commonRequestService = commonRequestService;
        this.router = router;
        this.topbarService = topbarService;
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is Required' },
                { type: 'pattern', message: 'Enter Valid Email' }
            ],
            password: [
                { type: 'required', message: 'Password is Required' }
            ]
        };
    }
    ngOnInit() {
        this.initLoginForm();
    }
    initLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(_shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_PATTERNS"].EMAIL)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])]
        });
    }
    login() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_4__["RequestEnums"].LOGIN, this.loginForm.value).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                this.storageService.setLocalStorageItem(_shared_constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE_ENUMS"].USERINFO, res.data);
                const userinfo = src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].avoidShallowClone(this.storageService.getLocalStorageItem(_shared_constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE_ENUMS"].USERINFO));
                console.log(JSON.parse(userinfo));
                this.topbarService.setUserInfoChange(true);
                this.router.navigate(['dashboard']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_5__["CommonRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_shared_components_topbar_topbar_service__WEBPACK_IMPORTED_MODULE_1__["TopbarService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth-views/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/views/auth-views/login/login.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/auth-views/login/login.module.ts ***!
  \********************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth-views/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/auth-views/login/login-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=views-auth-views-login-login-module-es2015.js.map