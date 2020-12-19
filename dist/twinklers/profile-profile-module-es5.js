function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsUserViewsUserManagementProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n    <div class=\"card m-t-50\" style=\"width: 22rem;\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex justify-content-center\">\r\n                <div>\r\n                    <input type=\"file\" id=\"img\" hidden (change)=\"profileChange($event)\" accept=\".png, .jpg, .jpeg\" multiple>\r\n                    <label for=\"img\">\r\n                        <img [src]=\"profileImage\" class=\"img\" (error)=\"imgError()\"/>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUserProfile()\">\r\n                <div class=\"form-group h-px-75\">\r\n                        <label for=\"registerEmail\">First name </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\r\n                        <p class=\"error\" *ngIf=\"isValidField(profileForm, 'firstName')\">\r\n                            {{getErrorMessage(profileForm, validationMessages, 'firstName')}}\r\n                        </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\"> Last name </label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'lastName')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'lastName')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerEmail\">Email </label>\r\n                    <input type=\"email\" class=\"form-control\" readonly id=\"registerEmail\" formControlName=\"email\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'email')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'email')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"form-group h-px-75\">\r\n                    <label for=\"registerPhonenumber\">Phone Number</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"registerPhonenumber\" formControlName=\"phoneNumber\" required>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm, 'phoneNumber')\">\r\n                        {{getErrorMessage(profileForm, validationMessages, 'phoneNumber')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"size\" class=\"form-group h-px-75\" formGroupName=\"gender\">\r\n                    <select class=\"custom-select\" formControlName=\"gender_id\" required>\r\n                        <option value=\"\">Select Gender</option>\r\n                        <option [value]=\"gender.gender_id\" *ngFor=\"let gender of gendersList\">{{gender.name}}</option>\r\n                    </select>\r\n                    <p class=\"error\" *ngIf=\"isValidField(profileForm.get('gender'), 'gender_id')\">\r\n                        {{getErrorMessage(profileForm.get('gender'), validationMessages, 'gender_id')}}\r\n                    </p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileForm.invalid\">Update</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/views/user-views/user-management/profile/profile-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/views/user-views/user-management/profile/profile-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppViewsUserViewsUserManagementProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/views/user-views/user-management/profile/profile.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/user-views/user-management/profile/profile.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/views/user-views/user-management/profile/profile.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsUserViewsUserManagementProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvcHJvZmlsZS9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHZpZXdzXFx1c2VyLXZpZXdzXFx1c2VyLW1hbmFnZW1lbnRcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSIsIi5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/user-views/user-management/profile/profile.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/views/user-views/user-management/profile/profile.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppViewsUserViewsUserManagementProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../shared/services/common/baseClass */
    "./src/app/shared/services/common/baseClass.ts");
    /* harmony import */


    var _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../shared/services/common/common.service */
    "./src/app/shared/services/common/common.service.ts");
    /* harmony import */


    var _shared_constants_validation_patterns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../shared/constants/validation-patterns */
    "./src/app/shared/constants/validation-patterns.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../shared/constants/request-enums */
    "./src/app/shared/constants/request-enums.ts");
    /* harmony import */


    var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../shared/services/http/common-request.service */
    "./src/app/shared/services/http/common-request.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/common/utils */
    "./src/app/shared/services/common/utils.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function (_shared_services_comm) {
      _inherits(ProfileComponent, _shared_services_comm);

      function ProfileComponent(commonRequestService, formBuilder, commonService) {
        var _this;

        _classCallCheck(this, ProfileComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileComponent).call(this));
        _this.commonRequestService = commonRequestService;
        _this.formBuilder = formBuilder;
        _this.commonService = commonService;
        _this.gendersList = [];
        _this.validationMessages = {
          firstName: [{
            type: 'required',
            message: 'First Name is required'
          }],
          lastName: [{
            type: 'required',
            message: 'Last Name is required'
          }],
          email: [{
            type: 'required',
            message: 'Email is required'
          }, {
            type: 'pattern',
            message: 'Enter Valid Email Address'
          }],
          phoneNumber: [{
            type: 'required',
            message: 'Phone Number is required'
          }, {
            type: 'pattern',
            message: 'Enter Valid Phone Number'
          }],
          gender_id: [{
            type: 'required',
            message: 'Gender is required'
          }]
        };
        _this.profileImage = '/assets/images/profile/default-profile.jpg';

        _this.commonService.checkAndLogout();

        _this.userInfo = _this.commonService.getUserInfo();
        return _this;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getGenders();
          this.initProfileForm();
        }
      }, {
        key: "initProfileForm",
        value: function initProfileForm() {
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
      }, {
        key: "prefillUserInfo",
        value: function prefillUserInfo() {
          this.profileForm.patchValue(this.userInfo);
          this.profileImage = this.userInfo.profilePicture;
        }
        /**
         * Get gender list
         */

      }, {
        key: "getGenders",
        value: function getGenders() {
          var _this2 = this;

          this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].GET_GENDER_LIST).subscribe(function (res) {
            if (res.errors.length > 0) {
              // error
              return;
            } else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
              // error
              return;
            } else {
              // success
              _this2.gendersList = res.data;
            }
          });
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile() {
          var _this3 = this;

          this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].UPDATE_USER_PROFILE, this.profileForm.value).subscribe(function (res) {
            if (res.errors.length > 0) {
              // error
              return;
            } else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
              // error
              return;
            } else {
              // success
              _this3.commonService.setUserInfo(res.data);
            }
          });
        }
      }, {
        key: "profileChange",
        value: function profileChange(ev) {
          var _this4 = this;

          console.log(ev.target.files);
          var formData = new FormData();
          var files = ev.target.files; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
          }

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'multipart/form-data'
          });
          this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_6__["RequestEnums"].UPLOAD_IMAGE_GET_URL, formData, null, headers).subscribe(function (res) {
            if (res.errors.length > 0) {
              // error
              return;
            } else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isValidInput(res.data)) {
              // error
              return;
            } else {
              // success
              alert('Updated Successfully');
              _this4.profileImage = res.data.fileUrl;

              _this4.profileForm.get('profilePicture').setValue(_this4.profileImage);

              _this4.updateUserProfile();
            }
          });
        }
      }, {
        key: "imgError",
        value: function imgError() {
          console.log('img error');
          this.profileImage = '/assets/images/profile/default-profile.jpg';
        }
      }]);

      return ProfileComponent;
    }(_shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_7__["CommonRequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/views/user-views/user-management/profile/profile.component.scss")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/views/user-views/user-management/profile/profile.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/views/user-views/user-management/profile/profile.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppViewsUserViewsUserManagementProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/views/user-views/user-management/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/views/user-views/user-management/profile/profile.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map