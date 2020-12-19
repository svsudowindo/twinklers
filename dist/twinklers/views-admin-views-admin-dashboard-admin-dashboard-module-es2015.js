(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-views-admin-dashboard-admin-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\r\n    <button class=\"btn btn-primary\" routerLink=\"/admin/category-list\">Category list</button>\r\n    <button class=\"btn btn-primary\" routerLink=\"/admin/products-list\">Products list</button>\r\n</div> -->\r\n\r\n<div class=\"d-flex justify-content-center w-100 flex-wrap\">\r\n    <ng-container *ngFor=\"let dashboardItem of dashboardData; let i = index\">\r\n    <div class=\"card m-r-15 m-b-15\" style=\"width: 30rem;height: 150px;border-radius: 20px;margin-top: 10px;\" (click)=\"navigateToDashboardItem(dashboardItem)\">\r\n        <div class=\"card-body color{{i}} pointer\">\r\n            <div class=\"d-flex justify-content-center heading\">\r\n                {{dashboardItem.label}}\r\n            </div>\r\n            <div class=\"d-flex justify-content-start stats\">\r\n                    Active: {{dashboardResponse && dashboardResponse[dashboardItem.key + '_active']}}\r\n            </div>\r\n            <div class=\"d-flex justify-content-end stats\">\r\n                Inactive: {{dashboardResponse && dashboardResponse[dashboardItem.key + '_active']}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n</div>");

/***/ }),

/***/ "./src/app/shared/constants/app-properties.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/constants/app-properties.ts ***!
  \****************************************************/
/*! exports provided: PROPERTIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTIES", function() { return PROPERTIES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PROPERTIES = {
    // Counts to retry the remote service if fails
    RETRY_SERVICE_COUNT: 0
};


/***/ }),

/***/ "./src/app/shared/constants/errors.ts":
/*!********************************************!*\
  !*** ./src/app/shared/constants/errors.ts ***!
  \********************************************/
/*! exports provided: errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const errors = {
    404: {
        message: 'Not Found'
    },
    0: {
        message: 'Unknown Error'
    },
    'default': {
        message: 'Something went wrong. Unable to find the issue'
    }
};


/***/ }),

/***/ "./src/app/shared/constants/gloabal-variable-enums.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/constants/gloabal-variable-enums.ts ***!
  \************************************************************/
/*! exports provided: GlobalVariableEnums, STATUS, POPUP_RESPONSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariableEnums", function() { return GlobalVariableEnums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_RESPONSE", function() { return POPUP_RESPONSE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GlobalVariableEnums;
(function (GlobalVariableEnums) {
    GlobalVariableEnums["TOKEN"] = "token";
})(GlobalVariableEnums || (GlobalVariableEnums = {}));
const STATUS = [
    {
        id: 'ACTIVE',
        value: true,
        label: 'ACTIVE'
    },
    {
        id: 'INACTIVE',
        value: false,
        label: 'INACTIVE'
    }
];
const POPUP_RESPONSE = {
    SUCCESS: 'success',
    CANCEL: 'cancel'
};


/***/ }),

/***/ "./src/app/shared/constants/request-enums.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/request-enums.ts ***!
  \***************************************************/
/*! exports provided: RequestEnums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestEnums", function() { return RequestEnums; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const RequestEnums = {
    REGISTER: {
        type: 'POST',
        path: '/auth/register',
        keys: [],
        values: []
    },
    GET_GENDER_LIST: {
        type: 'GET',
        path: '/auth/genders-list',
        keys: [],
        values: []
    },
    LOGIN: {
        type: 'POST',
        path: '/auth/login',
        keys: [],
        values: []
    },
    UPDATE_USER_PROFILE: {
        type: 'POST',
        path: '/common/update-profile',
        keys: [],
        values: []
    },
    UPLOAD_IMAGE_GET_URL: {
        type: 'POST',
        path: '/common/image-uploader',
        keys: [],
        values: []
    },
    CREATE_CATEGORY: {
        type: 'POST',
        path: '/admin/modify-category',
        keys: [],
        values: []
    },
    GET_CATEGORY_LIST: {
        type: 'GET',
        path: '/common/get-categories',
        keys: [],
        values: []
    },
    GET_DASHBOARD_DATA: {
        type: 'GET',
        path: '/admin/get-admin-dashboard',
        keys: [],
        values: []
    }
};


/***/ }),

/***/ "./src/app/shared/services/common/globalVariables.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/common/globalVariables.ts ***!
  \***********************************************************/
/*! exports provided: GlobalVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariables", function() { return GlobalVariables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/shared/services/common/utils.ts");



let GlobalVariables = class GlobalVariables {
    constructor() {
        this.paramsData = {};
        this.retainParamValue = false;
    }
    // returns the data based on the key passed
    // @key => object key from global variable enums
    getParameterData(key) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(this.paramsData) && !_utils__WEBPACK_IMPORTED_MODULE_2__["default"].isNull(this.paramsData)) {
            if (this.paramsData.hasOwnProperty(key)) {
                const output = this.paramsData[key];
                if (this.retainParamValue === false) {
                    this.setParameterData(key, null);
                }
                return output;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    // single time set method
    // @key => object key from global variable enums
    // @input => any data value either an object or a value
    // @retainvalue => weather the data should present or not
    setParameterData(key, input, retainValue = true) {
        this.paramsData[key] = input;
        this.retainParamValue = retainValue;
        console.log(this.paramsData);
    }
};
GlobalVariables = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalVariables);



/***/ }),

/***/ "./src/app/shared/services/http/common-http.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/http/common-http.service.ts ***!
  \*************************************************************/
/*! exports provided: CommonHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHttpService", function() { return CommonHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_app_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/app-properties */ "./src/app/shared/constants/app-properties.ts");
/* harmony import */ var _constants_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/errors */ "./src/app/shared/constants/errors.ts");

// Angular Modules






// Custom Enums
let CommonHttpService = class CommonHttpService {
    constructor(_http) {
        this._http = _http;
    }
    // @method get
    // @params HttpParams if needed
    // @path Request URL
    get(path, requestOptions) {
        return this._http.get(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler), // Catch Errors if service fails
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_constants_app_properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"].RETRY_SERVICE_COUNT) // if you want to retry the request. Please mention the retry count value
        );
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    put(path, body = {}, requestOptions) {
        return this._http.put(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    post(path, body = {}, requestOptions) {
        return this._http.post(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Utility method for Create.
    // @method patch
    // @param path
    // @param body
    // @param customHeaders
    patch(path, body = {}, requestOptions) {
        return this._http.patch(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Utility method for Create.
    // @method delete
    // @param path
    // @param customHeaders
    delete(path, requestOptions) {
        return this._http.delete(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    // Please add errors and error codes in errors.json.ts file
    errorHandler(error) {
        // To know weather the error is from Client or server error
        if (error.error instanceof ErrorEvent) {
            console.log('Client side error. Please check the request and body');
        }
        else {
            console.log('Server Error. Please check the error from server side');
        }
        // get's error message from errors.json.ts
        let errorMessage = _constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"]['default'].message;
        if (_constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"].hasOwnProperty(error.status)) {
            errorMessage = _constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"][error.status].message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
    // To execute any Http service request
    sendReciveService(requestObj, body = {}, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), customHeaders) {
        const requestOptions = {};
        requestOptions['headers'] = customHeaders ? customHeaders : {};
        requestOptions['params'] = params;
        switch (requestObj.type) {
            case 'GET': {
                return this.get(requestObj.path, requestOptions);
            }
            case 'POST': {
                return this.post(requestObj.path, body, requestOptions);
            }
            case 'PUT': {
                return this.put(requestObj.path, body, requestOptions);
            }
            case 'PATCH': {
                return this.patch(requestObj.path, body, requestOptions);
            }
            case 'DELETE': {
                return this.delete(requestObj.path, requestOptions);
            }
        }
    }
};
CommonHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonHttpService);



/***/ }),

/***/ "./src/app/shared/services/http/common-request.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/http/common-request.service.ts ***!
  \****************************************************************/
/*! exports provided: CommonRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonRequestService", function() { return CommonRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-http.service */ "./src/app/shared/services/http/common-http.service.ts");
/* harmony import */ var _frame_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame-url.service */ "./src/app/shared/services/http/frame-url.service.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ "./src/app/shared/services/common/utils.ts");





let CommonRequestService = class CommonRequestService {
    constructor(frameUrlService, commonHttpService) {
        this.frameUrlService = frameUrlService;
        this.commonHttpService = commonHttpService;
    }
    request(requestObject, postBody = null, httpParams = null, customHeaders = null) {
        return this.mainRequest(_common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].avoidShallowClone(requestObject), postBody, httpParams, customHeaders);
    }
    mainRequest(requestObject, postBody = null, httpParams = null, customHeaders = null) {
        requestObject.path = this.frameUrlService.getHttpFramedURL(requestObject);
        return this.commonHttpService.sendReciveService(requestObject, postBody, httpParams, customHeaders);
    }
};
CommonRequestService.ctorParameters = () => [
    { type: _frame_url_service__WEBPACK_IMPORTED_MODULE_3__["FrameURLService"] },
    { type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"] }
];
CommonRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonRequestService);



/***/ }),

/***/ "./src/app/shared/services/http/frame-url.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/http/frame-url.service.ts ***!
  \***********************************************************/
/*! exports provided: FrameURLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameURLService", function() { return FrameURLService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_globalVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/globalVariables */ "./src/app/shared/services/common/globalVariables.ts");
/* harmony import */ var _constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/gloabal-variable-enums */ "./src/app/shared/constants/gloabal-variable-enums.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





let FrameURLService = class FrameURLService {
    constructor(_globalVariables) {
        this._globalVariables = _globalVariables;
    }
    // Return the Exact path to be sent
    getHttpFramedURL(requestObj) {
        const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL + requestObj.path;
        let path = URL.replace('token', this._globalVariables.getParameterData(_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_3__["GlobalVariableEnums"].TOKEN));
        if (requestObj.keys.length > 0 && requestObj.values.length > 0) {
            for (let i = 0; i < requestObj.keys.length; i++) {
                // Replaces the word which starts with colon only. which indicates run time value
                path = path.replace(':' + requestObj.keys[i], requestObj.values[i]);
            }
        }
        return path;
    }
};
FrameURLService.ctorParameters = () => [
    { type: _common_globalVariables__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"] }
];
FrameURLService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FrameURLService);



/***/ }),

/***/ "./src/app/views/admin-views/admin-dashboard/admin-dashboard-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin-views/admin-dashboard/admin-dashboard-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.ts");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
            },
            {
                path: 'category-list',
                loadChildren: () => __webpack_require__.e(/*! import() | category-list-category-list-module */ "category-list-category-list-module").then(__webpack_require__.bind(null, /*! ../category-list/category-list.module */ "./src/app/views/admin-views/category-list/category-list.module.ts")).then(m => m.CategoryListModule)
            },
            {
                path: 'products-list',
                loadChildren: () => __webpack_require__.e(/*! import() | admin-products-list-admin-products-list-module */ "admin-products-list-admin-products-list-module").then(__webpack_require__.bind(null, /*! ../admin-products-list/admin-products-list.module */ "./src/app/views/admin-views/admin-products-list/admin-products-list.module.ts")).then(m => m.AdminProductsListModule)
            }
        ]
    }
];
let AdminDashboardRoutingModule = class AdminDashboardRoutingModule {
};
AdminDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminDashboardRoutingModule);



/***/ }),

/***/ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  font-size: 24px;\n  color: darkblue;\n  font-weight: 500;\n}\n\n.stats {\n  font-size: 20px;\n  font-weight: 500;\n  color: saddlebrown;\n}\n\n.card-body {\n  border-radius: 20px;\n}\n\n.card-body.color0 {\n  background-color: lightcyan !important;\n}\n\n.card-body.color1 {\n  background-color: blanchedalmond !important;\n}\n\n.card-body.color2 {\n  background-color: #8eb397ab !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvYWRtaW4tZGFzaGJvYXJkL0Q6XFxkcmVhbV9zdGFydHVwc1xcc29ydWNlX2NvZGVcXHR3aW5rbGVycy9zcmNcXGFwcFxcdmlld3NcXGFkbWluLXZpZXdzXFxhZG1pbi1kYXNoYm9hcmRcXGFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0NBQUE7QUNHSjs7QURBQTtFQUNJLDJDQUFBO0FDR0o7O0FEQUE7RUFDSSxzQ0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWRtaW4tdmlld3MvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHNhZGRsZWJyb3duXHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5jYXJkLWJvZHkuY29sb3IwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LmNvbG9yMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LmNvbG9yMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGViMzk3YWIgIWltcG9ydGFudDtcclxufVxyXG4iLCIuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IGRhcmtibHVlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdHMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBzYWRkbGVicm93bjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jYXJkLWJvZHkuY29sb3IwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWJvZHkuY29sb3IxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYm9keS5jb2xvcjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGViMzk3YWIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants/request-enums */ "./src/app/shared/constants/request-enums.ts");
/* harmony import */ var src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/common/utils */ "./src/app/shared/services/common/utils.ts");
/* harmony import */ var src_app_shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/http/common-request.service */ "./src/app/shared/services/http/common-request.service.ts");






let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(commonRequestService, router) {
        this.commonRequestService = commonRequestService;
        this.router = router;
        this.dashboardData = [
            {
                label: 'Categories',
                key: 'category',
                route: 'category-list'
            },
            {
                label: 'Products',
                key: 'products',
                route: 'products-list'
            },
            {
                label: 'Users',
                key: 'users',
                route: ''
            }
        ];
    }
    ngOnInit() {
        this.getDashboardInfo();
    }
    getDashboardInfo() {
        this.commonRequestService.request(src_app_shared_constants_request_enums__WEBPACK_IMPORTED_MODULE_3__["RequestEnums"].GET_DASHBOARD_DATA).subscribe(res => {
            if (res.status === 200 && src_app_shared_services_common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isValidInput(res.data)) {
                this.dashboardResponse = res.data;
            }
            else {
                alert('Something went wrong');
            }
        });
    }
    navigateToDashboardItem(dashboradData) {
        this.router.navigate(['admin', dashboradData.route]);
    }
};
AdminDashboardComponent.ctorParameters = () => [
    { type: src_app_shared_services_http_common_request_service__WEBPACK_IMPORTED_MODULE_5__["CommonRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.scss")).default]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin-views/admin-dashboard/admin-dashboard.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard-routing.module */ "./src/app/views/admin-views/admin-dashboard/admin-dashboard-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/views/admin-views/admin-dashboard/admin-dashboard.component.ts");






let AdminDashboardModule = class AdminDashboardModule {
};
AdminDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], AdminDashboardModule);



/***/ })

}]);
//# sourceMappingURL=views-admin-views-admin-dashboard-admin-dashboard-module-es2015.js.map