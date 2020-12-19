function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-views-forgot-password-forgot-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthViewsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n    <div class=\"card m-t-50\" style=\"width: 22rem;\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex flex-wrap  justify-content-center align-items-center\">\r\n                <p class=\"custom\">Forgot Password</p>\r\n            </div>\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"forgotEmail\">Email </label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"forgotEmail\">\r\n                </div>\r\n                <div class=\"d-flex justify-content-between\">\r\n                    <div class=\"d-flex justify-content-start\">\r\n                        <a routerLink=\"/my-account/login\" class=\"btn btn-link \">Login</a>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-start\">\r\n                        <a routerLink=\"/my-account/registration\" class=\"btn btn-link \">Registration</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-end\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Send Password</button>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/views/auth-views/forgot-password/forgot-password-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/views/auth-views/forgot-password/forgot-password-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ForgotPasswordRoutingModule */

  /***/
  function srcAppViewsAuthViewsForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function () {
      return ForgotPasswordRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/services/guard-services/can-activate.service */
    "./src/app/shared/services/guard-services/can-activate.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password.component */
    "./src/app/views/auth-views/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: '',
      component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
      canActivate: [_shared_services_guard_services_can_activate_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateService"]]
    }];

    var ForgotPasswordRoutingModule = function ForgotPasswordRoutingModule() {
      _classCallCheck(this, ForgotPasswordRoutingModule);
    };

    ForgotPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ForgotPasswordRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/auth-views/forgot-password/forgot-password.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/views/auth-views/forgot-password/forgot-password.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsAuthViewsForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC12aWV3cy9mb3Jnb3QtcGFzc3dvcmQvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXBwXFx2aWV3c1xcYXV0aC12aWV3c1xcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgtdmlld3MvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdXRoLXZpZXdzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59IiwiLmN1c3RvbSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/auth-views/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/views/auth-views/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppViewsAuthViewsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent() {
        _classCallCheck(this, ForgotPasswordComponent);
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-views/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/views/auth-views/forgot-password/forgot-password.component.scss")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/views/auth-views/forgot-password/forgot-password.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/views/auth-views/forgot-password/forgot-password.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ForgotPasswordModule */

  /***/
  function srcAppViewsAuthViewsForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function () {
      return ForgotPasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./forgot-password.component */
    "./src/app/views/auth-views/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password-routing.module */
    "./src/app/views/auth-views/forgot-password/forgot-password-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ForgotPasswordModule = function ForgotPasswordModule() {
      _classCallCheck(this, ForgotPasswordModule);
    };

    ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ForgotPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=views-auth-views-forgot-password-forgot-password-module-es5.js.map