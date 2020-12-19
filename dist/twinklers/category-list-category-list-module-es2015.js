(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category-list/category-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category-list/category-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"container main\">\r\n   <div class=\"row m-b-10 action-buttons\">\r\n     <div class=\"col-sm-6 m-t-10\">\r\n       <form style=\"width: 180px\">\r\n         <div class=\"form-group\">\r\n           <input type=\"text\" placeholder=\"Search by Category or ID\" class=\"form-control\">\r\n         </div>\r\n       </form>\r\n     </div>\r\n\r\n     <div class=\"col-sm-6 m-t-10 text-right \">\r\n       <button class=\"success m-t-10\" class=\"btn btn-outline-primary\" (click)=\"open()\">Create Category</button>\r\n     </div>\r\n   </div>\r\n   <div class=\"table-responsive\">\r\n     <table class=\"table table-hover\">\r\n       <thead>\r\n         <tr>\r\n           <th scope=\"col\">Id</th>\r\n           <th scope=\"col\">Category</th>\r\n           <th scope=\"col\">Created By</th>\r\n           <th scope=\"col\">Updated By</th>\r\n           <th scope=\"col\">Created Date</th>\r\n           <th scope=\"col\">Updated Date</th>\r\n           <th scope=\"col\">Status</th>\r\n         </tr>\r\n       </thead>\r\n       <tbody>\r\n         <tr *ngFor=\"let category of categories \" (click)=\"open(category)\">\r\n           <th>{{category.id}}</th>\r\n           <td>{{category.name}}</td>\r\n           <td>{{category.createdBy.userName}}</td>\r\n           <td>{{category.updatedBy.userName}}</td>\r\n           <td>{{category.createDate | date: 'MMM dd yyyy'}}</td>\r\n           <td>{{category.updatedDate | date: 'MMM dd yyyy'}}</td>\r\n           <td>\r\n             <span [ngClass]=\"category.active ? 'blue': 'light-grey'\">\r\n               {{category.active ? 'Active' : 'Inactive'}}\r\n             </span>\r\n           </td>\r\n         </tr>\r\n       </tbody>\r\n     </table>\r\n   </div>\r\n </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category/category.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category/category.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Category</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"categoryForm\">\r\n    <div class=\"form-group h-px-75\">\r\n      <label for=\"category id\">Category Id</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"category id\" placeholder=\"Enter The Category Id\" formControlName=\"id\">\r\n      <p class=\"error\" *ngIf=\"isValidField(categoryForm, 'id')\">\r\n        {{getErrorMessage(categoryForm, validationMessages, 'id')}}\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group h-px-75\">\r\n      <label for=\"category\">Enter Category Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"category\" formControlName=\"name\">\r\n      <p class=\"error\" *ngIf=\"isValidField(categoryForm, 'name')\">\r\n        {{getErrorMessage(categoryForm, validationMessages, 'name')}}\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group h-px-75\">\r\n      <label>Status</label>\r\n      <select class=\"custom-select\" required formControlName=\"active\">\r\n        <option value=\"\">Select Status</option>\r\n        <option [value]=\"status.value\" *ngFor=\"let status of statusList\">{{status.label}}</option>\r\n      </select>\r\n      <p class=\"error\" *ngIf=\"isValidField(categoryForm, 'active')\">\r\n        {{getErrorMessage(categoryForm, validationMessages, 'active')}}\r\n      </p>\r\n    </div>\r\n    <br>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-dark\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveCategory()\"\r\n    [disabled]=\"categoryForm.invalid\">{{isEditMode ? 'Update' : 'Save'}}</button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/shared/services/common/baseClass.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/common/baseClass.ts ***!
  \*****************************************************/
/*! exports provided: BaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/shared/services/common/utils.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let BaseClass = class BaseClass {
    constructor() {
    }
    // tslint:disable-next-line:contextual-lifecycle
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    isValidInput(input) {
        return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].isValidInput(input);
    }
    /**
     * Validates any form fields present Group form
     * @param groupName Group name should be a Group name passed from UI
     * @param fieldName field name should be a form control name passed from UI
     */
    isValidField(groupName, fieldName) {
        if (groupName.get(fieldName).invalid && (groupName.get(fieldName).touched || groupName.get(fieldName).dirty)) {
            return true;
        }
        return false;
    }
    // to validate either formArray, formControl, FormGroup.
    // tslint:disable-next-line:variable-name
    getErrorMessage(formGroup, validation_messages, validation_item) {
        let message = '';
        const keys = Object.keys(formGroup.controls);
        const index = keys.indexOf(validation_item);
        if (index !== -1) {
            const control = formGroup.get(keys[index]);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
                message = this.getControlErrorMessage(control, validation_messages, validation_item);
            }
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < keys.length; i++) {
                const control = formGroup.get(keys[i]);
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                    this.getErrorMessage(control, validation_messages, validation_item);
                }
                else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    message = this.validateFormArray(control, validation_messages, validation_item);
                    break;
                }
            }
        }
        return message;
    }
    // to validate form array
    // tslint:disable-next-line:variable-name
    validateFormArray(formControl, validation_messages, validation_item) {
        let message = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < formControl.controls.length; i++) {
            message = this.getErrorMessage(formControl.controls[i], validation_messages, validation_item);
            if (message !== '') {
                break;
            }
        }
        return message;
    }
    // returns the error particular message configured in form.
    // tslint:disable-next-line:variable-name
    getControlErrorMessage(control, validation_messages, validation_item) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < validation_messages[validation_item].length; i++) {
            if (control.hasError(validation_messages[validation_item][i].type)) {
                return validation_messages[validation_item][i].message;
            }
        }
    }
    findInvalidControls(formObject) {
        const invalid = [];
        const controls = formObject.controls;
        for (const name in controls) {
            if (controls[name].invalid || controls[name].hasError('notValid')) {
                invalid.push(name);
            }
        }
        _utils__WEBPACK_IMPORTED_MODULE_2__["default"].log('Invalid Controls: ' + _utils__WEBPACK_IMPORTED_MODULE_2__["default"].stringify(invalid));
    }
    /**
     * Allow only number event
     * @param event Keyboard event
     */
    onlyNumber(event) {
        return event.keyCode >= 48 && event.keyCode <= 57;
    }
    /**
     * Allow with decimals
     * @param event Keyboard event
     */
    allowNumberAndDot(event) {
        return (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 46;
    }
};
BaseClass = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BaseClass);



/***/ }),

/***/ "./src/app/views/admin-views/category-list/category-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/admin-views/category-list/category-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListRoutingModule", function() { return CategoryListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list.component */ "./src/app/views/admin-views/category-list/category-list.component.ts");




const routes = [
    {
        path: '',
        component: _category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]
    },
];
let CategoryListRoutingModule = class CategoryListRoutingModule {
};
CategoryListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryListRoutingModule);



/***/ }),

/***/ "./src/app/views/admin-views/category-list/category-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/admin-views/category-list/category-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXZpZXdzL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/views/admin-views/category-list/category-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/admin-views/category-list/category-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/constants/gloabal-variable-enums */ "./src/app/shared/constants/gloabal-variable-enums.ts");
/* harmony import */ var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category/category.component */ "./src/app/views/admin-views/category/category.component.ts");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");








let CategoryListComponent = class CategoryListComponent {
    constructor(modalService, commonRequestService) {
        this.modalService = modalService;
        this.commonRequestService = commonRequestService;
        this.categories = [];
    }
    ngOnInit() {
        this.getCategoryList();
    }
    open(category) {
        const modalRef = this.modalService.open(_category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"], {
            centered: true,
            keyboard: false,
            backdrop: 'static'
        });
        if (src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isValidInput(category)) {
            modalRef.componentInstance.categoryDetails = category;
        }
        modalRef.result.then(res => {
            if (res === _shared_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_1__["POPUP_RESPONSE"].SUCCESS) {
                this.getCategoryList();
            }
        });
    }
    getCategoryList() {
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_2__["RequestEnums"].GET_CATEGORY_LIST).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                this.categories = res.data;
            }
        });
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_3__["CommonRequestService"] }
];
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-category-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category-list/category-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-list.component.scss */ "./src/app/views/admin-views/category-list/category-list.component.scss")).default]
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/views/admin-views/category-list/category-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-views/category-list/category-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListModule", function() { return CategoryListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _category_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list-routing.module */ "./src/app/views/admin-views/category-list/category-list-routing.module.ts");
/* harmony import */ var _category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-list.component */ "./src/app/views/admin-views/category-list/category-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category/category.component */ "./src/app/views/admin-views/category/category.component.ts");







let CategoryListModule = class CategoryListModule {
};
CategoryListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _category_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryListRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        exports: [_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"]],
        bootstrap: [_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"]],
        entryComponents: [_category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]]
    })
], CategoryListModule);



/***/ }),

/***/ "./src/app/views/admin-views/category/category.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/admin-views/category/category.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown {\n  width: 100%;\n  color: black;\n}\n\n.size {\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvY2F0ZWdvcnkvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXBwXFx2aWV3c1xcYWRtaW4tdmlld3NcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zaXplIHtcclxuICAgIGhlaWdodDogNDVweDtcclxufSIsIi5kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaXplIHtcbiAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/admin-views/category/category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/admin-views/category/category.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/constants/gloabal-variable-enums */ "./src/app/shared/constants/gloabal-variable-enums.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common/baseClass */ "./src/app/shared/services/common/baseClass.ts");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");









let CategoryComponent = class CategoryComponent extends src_app_shared_services_common_baseClass__WEBPACK_IMPORTED_MODULE_7__["BaseClass"] {
    constructor(modal, formBuilder, commonRequestService) {
        super();
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.commonRequestService = commonRequestService;
        this.statusList = _shared_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_4__["STATUS"];
        this.isEditMode = false;
        this.validationMessages = {
            id: [
                { type: 'required', message: 'Category id is required' }
            ],
            name: [
                { type: 'required', message: 'Category Name is required' }
            ],
            active: [
                { type: 'required', message: 'Category Status is required' }
            ]
        };
    }
    ngOnInit() {
        this.initCategoryGroup();
    }
    initCategoryGroup() {
        this.categoryForm = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            active: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            _id: [null]
        });
        if (src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isValidInput(this.categoryDetails)) {
            this.isEditMode = true;
            this.categoryForm.patchValue(this.categoryDetails);
        }
    }
    saveCategory() {
        const payload = this.categoryForm.value;
        if (!src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isValidInput(payload._id)) {
            delete payload._id;
        }
        this.commonRequestService.request(_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_1__["RequestEnums"].CREATE_CATEGORY, payload).subscribe(res => {
            if (res.errors.length > 0) {
                // error
                return;
            }
            else if (res.status !== 200 || !src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].isValidInput(res.data)) {
                // error
                return;
            }
            else {
                // success
                alert(res.message);
                this.modal.close(_shared_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_4__["POPUP_RESPONSE"].SUCCESS);
            }
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_2__["CommonRequestService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.scss */ "./src/app/views/admin-views/category/category.component.scss")).default]
    })
], CategoryComponent);



/***/ })

}]);
//# sourceMappingURL=category-list-category-list-module-es2015.js.map