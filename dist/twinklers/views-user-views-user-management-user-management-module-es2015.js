(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-views-user-management-user-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/user-management.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/user-management.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\r\n  <div class=\"sidebar\">\r\n    <a routerLink=\"/my-account/user-management/profile\" routerLinkActive=\"active\">Profile</a>\r\n    <a routerLink=\"/my-account/user-management/address-list\" routerLinkActive=\"active\">Address Management</a>\r\n  </div>\r\n\r\n  <!-- Page content -->\r\n  <div class=\"content p-20\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/user-views/user-management/user-management-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/user-management-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.component */ "./src/app/views/user-views/user-management/user-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_1__["UserManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/views/user-views/user-management/profile/profile.module.ts")).then(m => m.ProfileModule)
            },
            {
                path: 'address-list',
                loadChildren: () => __webpack_require__.e(/*! import() | address-list-address-list-module */ "address-list-address-list-module").then(__webpack_require__.bind(null, /*! ./address-list/address-list.module */ "./src/app/views/user-views/user-management/address-list/address-list.module.ts")).then(m => m.AddressListModule)
            }
        ]
    }
];
let UserManagementRoutingModule = class UserManagementRoutingModule {
};
UserManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], UserManagementRoutingModule);



/***/ }),

/***/ "./src/app/views/user-views/user-management/user-management.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/user-management.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The side navigation menu */\n.sidebar {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n/* Sidebar links */\n.sidebar a {\n  display: block;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n}\n/* Active/current link */\n.sidebar a.active {\n  background-color: #8080809e;\n  color: white;\n}\n/* Links on mouse-over */\n.sidebar a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n/* Page content. The value of the margin-left property should match the value of the sidebar's width property */\ndiv.content {\n  margin-left: 200px;\n  padding: 1px 16px;\n  height: 90vh;\n  width: auto;\n  overflow-y: overlay;\n  min-height: 300px;\n}\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n\n  .sidebar a {\n    float: left;\n  }\n\n  div.content {\n    margin-left: 0;\n  }\n}\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n@media screen and (max-width: 400px) {\n  .sidebar a {\n    text-align: center;\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXBwXFx2aWV3c1xcdXNlci12aWV3c1xcdXNlci1tYW5hZ2VtZW50XFx1c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFLGtCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUUsd0JBQUE7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUUsd0JBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUUsK0dBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREVFLDZFQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNDSjs7RURDRTtJQUFZLFdBQUE7RUNHZDs7RURGRTtJQUFhLGNBQUE7RUNNZjtBQUNGO0FESkUsNkZBQUE7QUFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDTUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xyXG4uc2lkZWJhciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBTaWRlYmFyIGxpbmtzICovXHJcbiAgLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuICAuc2lkZWJhciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwOWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIG9uIG1vdXNlLW92ZXIgKi9cclxuICAuc2lkZWJhciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBQYWdlIGNvbnRlbnQuIFRoZSB2YWx1ZSBvZiB0aGUgbWFyZ2luLWxlZnQgcHJvcGVydHkgc2hvdWxkIG1hdGNoIHRoZSB2YWx1ZSBvZiB0aGUgc2lkZWJhcidzIHdpZHRoIHByb3BlcnR5ICovXHJcbiAgZGl2LmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNzAwcHggd2lkZSwgbWFrZSB0aGUgc2lkZWJhciBpbnRvIGEgdG9wYmFyICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgZGl2LmNvbnRlbnQge21hcmdpbi1sZWZ0OiAwO31cclxuICB9XHJcbiAgXHJcbiAgLyogT24gc2NyZWVucyB0aGF0IGFyZSBsZXNzIHRoYW4gNDAwcHgsIGRpc3BsYXkgdGhlIGJhciB2ZXJ0aWNhbGx5LCBpbnN0ZWFkIG9mIGhvcml6b250YWxseSAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuc2lkZWJhciBhIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9IiwiLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXG4uc2lkZWJhciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qIFNpZGViYXIgbGlua3MgKi9cbi5zaWRlYmFyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cbi5zaWRlYmFyIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDllO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIExpbmtzIG9uIG1vdXNlLW92ZXIgKi9cbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBQYWdlIGNvbnRlbnQuIFRoZSB2YWx1ZSBvZiB0aGUgbWFyZ2luLWxlZnQgcHJvcGVydHkgc2hvdWxkIG1hdGNoIHRoZSB2YWx1ZSBvZiB0aGUgc2lkZWJhcidzIHdpZHRoIHByb3BlcnR5ICovXG5kaXYuY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgcGFkZGluZzogMXB4IDE2cHg7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4vKiBPbiBzY3JlZW5zIHRoYXQgYXJlIGxlc3MgdGhhbiA3MDBweCB3aWRlLCBtYWtlIHRoZSBzaWRlYmFyIGludG8gYSB0b3BiYXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnNpZGViYXIgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICBkaXYuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgbGVzcyB0aGFuIDQwMHB4LCBkaXNwbGF5IHRoZSBiYXIgdmVydGljYWxseSwgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5zaWRlYmFyIGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/user-views/user-management/user-management.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/user-management.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserManagementComponent = class UserManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/user-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-management.component.scss */ "./src/app/views/user-views/user-management/user-management.component.scss")).default]
    })
], UserManagementComponent);



/***/ }),

/***/ "./src/app/views/user-views/user-management/user-management.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/user-management.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/views/user-views/user-management/user-management-routing.module.ts");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management.component */ "./src/app/views/user-views/user-management/user-management.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let UserManagementModule = class UserManagementModule {
};
UserManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserManagementRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], UserManagementModule);



/***/ })

}]);
//# sourceMappingURL=views-user-views-user-management-user-management-module-es2015.js.map