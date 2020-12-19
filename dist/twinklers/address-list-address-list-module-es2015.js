(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-list-address-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/address-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/address-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container main\">\r\n  <div class=\"row m-b-10 action-buttons\">\r\n    <div class=\"col-md-6 text-right\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary m-t-10\" (click)=\"open()\">Create Address</button>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<h3 class=\"a-spacing-medium\">Your Addresses</h3>\r\n<div class=\"card border-secondary mb-3\" class=\"doted\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <form>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <img\r\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMfFBUB8Kc3yAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAABmJLR0QA/wD/AP+gvaeTAAAAP0lEQVRYw+3UsQkAMAwDsPz/o29pHkjnlCKDV6PJVb8myZkKBgYGBgYGBvYg7Da+VTAwMD8GBgYGBgYGBraWBpeqjFTlGtDAAAAAAElFTkSuQmCC\"\r\n          (click)=\"open()\" />\r\n      </div>\r\n      <h2 class=\"a-color-tertiary\">Add address</h2>\r\n    </form>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"card border-secondary mb-3\" style=\"max-width: 18rem;\">\r\n    <div class=\"card-header d-flex justify-content-center\"><b>HOME</b>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end\">\r\n      <a class=\"btn btn-info\" href=\"#\" aria-label=\"Delete\">\r\n        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <span><b>Nageswararao Mokkarala</b></span><br>\r\n      <span>H:no:15-2-117/1</span><br>\r\n      <span>Street:gayathrinagar</span><br>\r\n      <span>Area : P.W.D coloney </span><br>\r\n      <span>City :macherla</span><br>\r\n      <span>Disrict & State:Guntur, A.P</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add New Address</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"btn-group btn-group-toggle d-flex justify-content-between\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"addressType\">\r\n\r\n      <label [ngClass]=\"addressType === 'HOME' ? 'address-type-active': 'address-type'\" ngbButtonLabel>\r\n        <input type=\"radio\" ngbButton value=\"HOME\"><i class=\"fa fa-home\"></i> Home\r\n      </label>\r\n      <label  [ngClass]=\"addressType === 'OFFICE' ? 'address-type-active': 'address-type'\" ngbButtonLabel>\r\n        <input type=\"radio\" ngbButton value=\"OFFICE\"><i class=\"fa fa-building\" aria-hidden=\"true\"></i>\r\n        Office\r\n      </label>\r\n      <label  [ngClass]=\"addressType === 'OTHERS' ? 'address-type-active': 'address-type'\" ngbButtonLabel>\r\n        <input type=\"radio\" ngbButton value=\"OTHERS\"><i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\r\n        Others\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Country</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"India\" readonly>\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>State</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter state name\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>City</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter city name\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Full name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter full name\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Mobile number</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter mobile number\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Street Address</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Flat / House No./Floor / Building\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Landmark</label>\r\n      <input type=\"text\" class=\"form-control\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Pincode</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"6 digits [0-9] pincode\">\r\n      <div class=\"input-group-append\">\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary \" (click)=\"modal.close('Save click')\">Save</button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/address-list-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/address-list-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddressListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListRoutingModule", function() { return AddressListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _address_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-list.component */ "./src/app/views/user-views/user-management/address-list/address-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _address_list_component__WEBPACK_IMPORTED_MODULE_1__["AddressListComponent"]
    }
];
let AddressListRoutingModule = class AddressListRoutingModule {
};
AddressListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AddressListRoutingModule);



/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/address-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/address-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".doted {\n  border-style: dashed;\n  height: 266px;\n  width: 320px;\n  border-width: 2px;\n  box-sizing: border-box;\n  border-color: #C7C7C7;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.a-color-tertiary {\n  color: #767676 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvYWRkcmVzcy1saXN0L0Q6XFxkcmVhbV9zdGFydHVwc1xcc29ydWNlX2NvZGVcXHR3aW5rbGVycy9zcmNcXGFwcFxcdmlld3NcXHVzZXItdmlld3NcXHVzZXItbWFuYWdlbWVudFxcYWRkcmVzcy1saXN0XFxhZGRyZXNzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L2FkZHJlc3MtbGlzdC9hZGRyZXNzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRko7O0FETUE7RUFDSSx5QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvYWRkcmVzcy1saXN0L2FkZHJlc3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3RlZCB7XHJcbiAgICAvLyBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogZG90dGVkIGRhc2hlZDtcclxuICAgIC8vIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGhlaWdodDogMjY2cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItY29sb3I6ICNDN0M3Qzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuO1xyXG4uYS1jb2xvci10ZXJ0aWFyeSB7XHJcbiAgICBjb2xvcjogIzc2NzY3NiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5kb3RlZCB7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBoZWlnaHQ6IDI2NnB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItY29sb3I6ICNDN0M3Qzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmEtY29sb3ItdGVydGlhcnkge1xuICBjb2xvcjogIzc2NzY3NiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/address-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/address-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddressListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListComponent", function() { return AddressListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modify_address_modify_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify-address/modify-address.component */ "./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let AddressListComponent = class AddressListComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    open() {
        const modalRef = this.modalService.open(_modify_address_modify_address_component__WEBPACK_IMPORTED_MODULE_2__["ModifyAddressComponent"], {
            centered: true,
            keyboard: false,
            backdrop: 'static',
            scrollable: true
        });
        modalRef.componentInstance.name = 'World';
    }
};
AddressListComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
AddressListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/address-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-list.component.scss */ "./src/app/views/user-views/user-management/address-list/address-list.component.scss")).default]
    })
], AddressListComponent);



/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/address-list.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/address-list.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddressListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListModule", function() { return AddressListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _address_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-list.component */ "./src/app/views/user-views/user-management/address-list/address-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _address_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-list-routing.module */ "./src/app/views/user-views/user-management/address-list/address-list-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modify_address_modify_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-address/modify-address.component */ "./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.ts");







let AddressListModule = class AddressListModule {
};
AddressListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_address_list_component__WEBPACK_IMPORTED_MODULE_1__["AddressListComponent"], _modify_address_modify_address_component__WEBPACK_IMPORTED_MODULE_6__["ModifyAddressComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _address_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddressListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        exports: [_address_list_component__WEBPACK_IMPORTED_MODULE_1__["AddressListComponent"]],
        bootstrap: [_address_list_component__WEBPACK_IMPORTED_MODULE_1__["AddressListComponent"]],
        entryComponents: [_modify_address_modify_address_component__WEBPACK_IMPORTED_MODULE_6__["ModifyAddressComponent"]]
    })
], AddressListModule);



/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".address-type {\n  border: 1px solid;\n  margin-right: 10px;\n  width: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  border-radius: 12px;\n  box-shadow: none;\n}\n\n.address-type-active {\n  background-color: #382610;\n  color: white;\n  border: 1px solid;\n  margin-right: 10px;\n  width: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  border-radius: 12px;\n  box-shadow: none;\n}\n\n.address-type-active:focus {\n  box-shadow: none;\n}\n\n.address-type:focus {\n  box-shadow: none;\n}\n\n.modal-body {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvYWRkcmVzcy1saXN0L21vZGlmeS1hZGRyZXNzL0Q6XFxkcmVhbV9zdGFydHVwc1xcc29ydWNlX2NvZGVcXHR3aW5rbGVycy9zcmNcXGFwcFxcdmlld3NcXHVzZXItdmlld3NcXHVzZXItbWFuYWdlbWVudFxcYWRkcmVzcy1saXN0XFxtb2RpZnktYWRkcmVzc1xcbW9kaWZ5LWFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvdXNlci1tYW5hZ2VtZW50L2FkZHJlc3MtbGlzdC9tb2RpZnktYWRkcmVzcy9tb2RpZnktYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvYWRkcmVzcy1saXN0L21vZGlmeS1hZGRyZXNzL0Q6XFxkcmVhbV9zdGFydHVwc1xcc29ydWNlX2NvZGVcXHR3aW5rbGVycy9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTtFQUNJLHlCRVZhO0VGV2IsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci12aWV3cy91c2VyLW1hbmFnZW1lbnQvYWRkcmVzcy1saXN0L21vZGlmeS1hZGRyZXNzL21vZGlmeS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG4uYWRkcmVzcy10eXBlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uYWRkcmVzcy10eXBlLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hvY2xhdGUtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG5cclxuLmFkZHJlc3MtdHlwZS1hY3RpdmU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmFkZHJlc3MtdHlwZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iLCIuYWRkcmVzcy10eXBlIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFkZHJlc3MtdHlwZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgyNjEwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hZGRyZXNzLXR5cGUtYWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFkZHJlc3MtdHlwZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgaGVpZ2h0OiBhdXRvO1xufSIsIiRncmVlbi1jb2xvcjogIzY4OWYzODtcclxuJHdoaXRlLWNvbG9yOiB3aGl0ZTtcclxuJG9yYW5nZS1jb2xvcjogI2ZmN2UwMDtcclxuJGNob2NsYXRlLWNvbG9yOiAjMzgyNjEwO1xyXG4kbGlnaHQtZ3JleTogIzgwODA4MDI5OyJdfQ== */");

/***/ }),

/***/ "./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ModifyAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyAddressComponent", function() { return ModifyAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModifyAddressComponent = class ModifyAddressComponent {
    constructor(modal) {
        this.modal = modal;
        this.addressType = 'HOME';
    }
    ngOnInit() {
    }
};
ModifyAddressComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
ModifyAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modify-address.component.scss */ "./src/app/views/user-views/user-management/address-list/modify-address/modify-address.component.scss")).default]
    })
], ModifyAddressComponent);



/***/ })

}]);
//# sourceMappingURL=address-list-address-list-module-es2015.js.map