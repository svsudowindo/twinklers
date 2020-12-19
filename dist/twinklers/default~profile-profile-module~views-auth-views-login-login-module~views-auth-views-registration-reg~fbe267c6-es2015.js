(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6"],{

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

/***/ "./src/app/shared/constants/validation-patterns.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/constants/validation-patterns.ts ***!
  \*********************************************************/
/*! exports provided: VALIDATION_PATTERNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_PATTERNS", function() { return VALIDATION_PATTERNS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const VALIDATION_PATTERNS = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    NAME: /^[a-zA-Z0-9!@#$%^&*'?><(){}:;.,_+=/\~` -]+$/i,
    PASSWORD: /^[a-zA-Z0-9!@#$%^&*]+$/i,
    PHONE: /\d{10}/,
    USERNAME: /^[a-z0-9A-Z]+$/i,
    POSITIVE_INTEGER: /^[0-9," "]+$/i
};


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



/***/ })

}]);
//# sourceMappingURL=default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6-es2015.js.map