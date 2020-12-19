function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6"], {
  /***/
  "./src/app/shared/constants/app-properties.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/constants/app-properties.ts ***!
    \****************************************************/

  /*! exports provided: PROPERTIES */

  /***/
  function srcAppSharedConstantsAppPropertiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROPERTIES", function () {
      return PROPERTIES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PROPERTIES = {
      // Counts to retry the remote service if fails
      RETRY_SERVICE_COUNT: 0
    };
    /***/
  },

  /***/
  "./src/app/shared/constants/errors.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/constants/errors.ts ***!
    \********************************************/

  /*! exports provided: errors */

  /***/
  function srcAppSharedConstantsErrorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errors", function () {
      return errors;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var errors = {
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
    /***/
  },

  /***/
  "./src/app/shared/constants/gloabal-variable-enums.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/constants/gloabal-variable-enums.ts ***!
    \************************************************************/

  /*! exports provided: GlobalVariableEnums, STATUS, POPUP_RESPONSE */

  /***/
  function srcAppSharedConstantsGloabalVariableEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalVariableEnums", function () {
      return GlobalVariableEnums;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STATUS", function () {
      return STATUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POPUP_RESPONSE", function () {
      return POPUP_RESPONSE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GlobalVariableEnums;

    (function (GlobalVariableEnums) {
      GlobalVariableEnums["TOKEN"] = "token";
    })(GlobalVariableEnums || (GlobalVariableEnums = {}));

    var STATUS = [{
      id: 'ACTIVE',
      value: true,
      label: 'ACTIVE'
    }, {
      id: 'INACTIVE',
      value: false,
      label: 'INACTIVE'
    }];
    var POPUP_RESPONSE = {
      SUCCESS: 'success',
      CANCEL: 'cancel'
    };
    /***/
  },

  /***/
  "./src/app/shared/constants/request-enums.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/constants/request-enums.ts ***!
    \***************************************************/

  /*! exports provided: RequestEnums */

  /***/
  function srcAppSharedConstantsRequestEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestEnums", function () {
      return RequestEnums;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RequestEnums = {
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
    /***/
  },

  /***/
  "./src/app/shared/constants/validation-patterns.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/constants/validation-patterns.ts ***!
    \*********************************************************/

  /*! exports provided: VALIDATION_PATTERNS */

  /***/
  function srcAppSharedConstantsValidationPatternsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VALIDATION_PATTERNS", function () {
      return VALIDATION_PATTERNS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VALIDATION_PATTERNS = {
      EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      NAME: /^[a-zA-Z0-9!@#$%^&*'?><(){}:;.,_+=/\~` -]+$/i,
      PASSWORD: /^[a-zA-Z0-9!@#$%^&*]+$/i,
      PHONE: /\d{10}/,
      USERNAME: /^[a-z0-9A-Z]+$/i,
      POSITIVE_INTEGER: /^[0-9," "]+$/i
    };
    /***/
  },

  /***/
  "./src/app/shared/services/common/baseClass.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/common/baseClass.ts ***!
    \*****************************************************/

  /*! exports provided: BaseClass */

  /***/
  function srcAppSharedServicesCommonBaseClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseClass", function () {
      return BaseClass;
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


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/shared/services/common/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BaseClass =
    /*#__PURE__*/
    function () {
      function BaseClass() {
        _classCallCheck(this, BaseClass);
      } // tslint:disable-next-line:contextual-lifecycle


      _createClass(BaseClass, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "isValidInput",
        value: function isValidInput(input) {
          return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].isValidInput(input);
        }
        /**
         * Validates any form fields present Group form
         * @param groupName Group name should be a Group name passed from UI
         * @param fieldName field name should be a form control name passed from UI
         */

      }, {
        key: "isValidField",
        value: function isValidField(groupName, fieldName) {
          if (groupName.get(fieldName).invalid && (groupName.get(fieldName).touched || groupName.get(fieldName).dirty)) {
            return true;
          }

          return false;
        } // to validate either formArray, formControl, FormGroup.
        // tslint:disable-next-line:variable-name

      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(formGroup, validation_messages, validation_item) {
          var message = '';
          var keys = Object.keys(formGroup.controls);
          var index = keys.indexOf(validation_item);

          if (index !== -1) {
            var control = formGroup.get(keys[index]);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
              message = this.getControlErrorMessage(control, validation_messages, validation_item);
            }
          } else {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < keys.length; i++) {
              var _control = formGroup.get(keys[i]);

              if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                this.getErrorMessage(_control, validation_messages, validation_item);
              } else if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                message = this.validateFormArray(_control, validation_messages, validation_item);
                break;
              }
            }
          }

          return message;
        } // to validate form array
        // tslint:disable-next-line:variable-name

      }, {
        key: "validateFormArray",
        value: function validateFormArray(formControl, validation_messages, validation_item) {
          var message = ''; // tslint:disable-next-line:prefer-for-of

          for (var i = 0; i < formControl.controls.length; i++) {
            message = this.getErrorMessage(formControl.controls[i], validation_messages, validation_item);

            if (message !== '') {
              break;
            }
          }

          return message;
        } // returns the error particular message configured in form.
        // tslint:disable-next-line:variable-name

      }, {
        key: "getControlErrorMessage",
        value: function getControlErrorMessage(control, validation_messages, validation_item) {
          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < validation_messages[validation_item].length; i++) {
            if (control.hasError(validation_messages[validation_item][i].type)) {
              return validation_messages[validation_item][i].message;
            }
          }
        }
      }, {
        key: "findInvalidControls",
        value: function findInvalidControls(formObject) {
          var invalid = [];
          var controls = formObject.controls;

          for (var name in controls) {
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

      }, {
        key: "onlyNumber",
        value: function onlyNumber(event) {
          return event.keyCode >= 48 && event.keyCode <= 57;
        }
        /**
         * Allow with decimals
         * @param event Keyboard event
         */

      }, {
        key: "allowNumberAndDot",
        value: function allowNumberAndDot(event) {
          return event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode === 46;
        }
      }]);

      return BaseClass;
    }();

    BaseClass = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BaseClass);
    /***/
  },

  /***/
  "./src/app/shared/services/common/globalVariables.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/common/globalVariables.ts ***!
    \***********************************************************/

  /*! exports provided: GlobalVariables */

  /***/
  function srcAppSharedServicesCommonGlobalVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalVariables", function () {
      return GlobalVariables;
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


    var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utils */
    "./src/app/shared/services/common/utils.ts");

    var GlobalVariables =
    /*#__PURE__*/
    function () {
      function GlobalVariables() {
        _classCallCheck(this, GlobalVariables);

        this.paramsData = {};
        this.retainParamValue = false;
      } // returns the data based on the key passed
      // @key => object key from global variable enums


      _createClass(GlobalVariables, [{
        key: "getParameterData",
        value: function getParameterData(key) {
          if (!_utils__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(this.paramsData) && !_utils__WEBPACK_IMPORTED_MODULE_2__["default"].isNull(this.paramsData)) {
            if (this.paramsData.hasOwnProperty(key)) {
              var output = this.paramsData[key];

              if (this.retainParamValue === false) {
                this.setParameterData(key, null);
              }

              return output;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } // single time set method
        // @key => object key from global variable enums
        // @input => any data value either an object or a value
        // @retainvalue => weather the data should present or not

      }, {
        key: "setParameterData",
        value: function setParameterData(key, input) {
          var retainValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          this.paramsData[key] = input;
          this.retainParamValue = retainValue;
          console.log(this.paramsData);
        }
      }]);

      return GlobalVariables;
    }();

    GlobalVariables = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GlobalVariables);
    /***/
  },

  /***/
  "./src/app/shared/services/http/common-http.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/services/http/common-http.service.ts ***!
    \*************************************************************/

  /*! exports provided: CommonHttpService */

  /***/
  function srcAppSharedServicesHttpCommonHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonHttpService", function () {
      return CommonHttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _constants_app_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../constants/app-properties */
    "./src/app/shared/constants/app-properties.ts");
    /* harmony import */


    var _constants_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../constants/errors */
    "./src/app/shared/constants/errors.ts"); // Angular Modules
    // Custom Enums


    var CommonHttpService =
    /*#__PURE__*/
    function () {
      function CommonHttpService(_http) {
        _classCallCheck(this, CommonHttpService);

        this._http = _http;
      } // @method get
      // @params HttpParams if needed
      // @path Request URL


      _createClass(CommonHttpService, [{
        key: "get",
        value: function get(path, requestOptions) {
          return this._http.get(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler), // Catch Errors if service fails
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_constants_app_properties__WEBPACK_IMPORTED_MODULE_5__["PROPERTIES"].RETRY_SERVICE_COUNT) // if you want to retry the request. Please mention the retry count value
          );
        } // Utility method for Create.
        // @method post
        // @param path
        // @param body

      }, {
        key: "put",
        value: function put(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var requestOptions = arguments.length > 2 ? arguments[2] : undefined;
          return this._http.put(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        } // Utility method for Create.
        // @method post
        // @param path
        // @param body

      }, {
        key: "post",
        value: function post(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var requestOptions = arguments.length > 2 ? arguments[2] : undefined;
          return this._http.post(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        } // Utility method for Create.
        // @method patch
        // @param path
        // @param body
        // @param customHeaders

      }, {
        key: "patch",
        value: function patch(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var requestOptions = arguments.length > 2 ? arguments[2] : undefined;
          return this._http.patch(path, body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        } // Utility method for Create.
        // @method delete
        // @param path
        // @param customHeaders

      }, {
        key: "delete",
        value: function _delete(path, requestOptions) {
          return this._http.delete(path, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        } // Please add errors and error codes in errors.json.ts file

      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          // To know weather the error is from Client or server error
          if (error.error instanceof ErrorEvent) {
            console.log('Client side error. Please check the request and body');
          } else {
            console.log('Server Error. Please check the error from server side');
          } // get's error message from errors.json.ts


          var errorMessage = _constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"]['default'].message;

          if (_constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"].hasOwnProperty(error.status)) {
            errorMessage = _constants_errors__WEBPACK_IMPORTED_MODULE_6__["errors"][error.status].message;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        } // To execute any Http service request

      }, {
        key: "sendReciveService",
        value: function sendReciveService(requestObj) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          var customHeaders = arguments.length > 3 ? arguments[3] : undefined;
          var requestOptions = {};
          requestOptions['headers'] = customHeaders ? customHeaders : {};
          requestOptions['params'] = params;

          switch (requestObj.type) {
            case 'GET':
              {
                return this.get(requestObj.path, requestOptions);
              }

            case 'POST':
              {
                return this.post(requestObj.path, body, requestOptions);
              }

            case 'PUT':
              {
                return this.put(requestObj.path, body, requestOptions);
              }

            case 'PATCH':
              {
                return this.patch(requestObj.path, body, requestOptions);
              }

            case 'DELETE':
              {
                return this.delete(requestObj.path, requestOptions);
              }
          }
        }
      }]);

      return CommonHttpService;
    }();

    CommonHttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonHttpService);
    /***/
  },

  /***/
  "./src/app/shared/services/http/common-request.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/services/http/common-request.service.ts ***!
    \****************************************************************/

  /*! exports provided: CommonRequestService */

  /***/
  function srcAppSharedServicesHttpCommonRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonRequestService", function () {
      return CommonRequestService;
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


    var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common-http.service */
    "./src/app/shared/services/http/common-http.service.ts");
    /* harmony import */


    var _frame_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./frame-url.service */
    "./src/app/shared/services/http/frame-url.service.ts");
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/utils */
    "./src/app/shared/services/common/utils.ts");

    var CommonRequestService =
    /*#__PURE__*/
    function () {
      function CommonRequestService(frameUrlService, commonHttpService) {
        _classCallCheck(this, CommonRequestService);

        this.frameUrlService = frameUrlService;
        this.commonHttpService = commonHttpService;
      }

      _createClass(CommonRequestService, [{
        key: "request",
        value: function request(requestObject) {
          var postBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var httpParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var customHeaders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          return this.mainRequest(_common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].avoidShallowClone(requestObject), postBody, httpParams, customHeaders);
        }
      }, {
        key: "mainRequest",
        value: function mainRequest(requestObject) {
          var postBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var httpParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var customHeaders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          requestObject.path = this.frameUrlService.getHttpFramedURL(requestObject);
          return this.commonHttpService.sendReciveService(requestObject, postBody, httpParams, customHeaders);
        }
      }]);

      return CommonRequestService;
    }();

    CommonRequestService.ctorParameters = function () {
      return [{
        type: _frame_url_service__WEBPACK_IMPORTED_MODULE_3__["FrameURLService"]
      }, {
        type: _common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"]
      }];
    };

    CommonRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonRequestService);
    /***/
  },

  /***/
  "./src/app/shared/services/http/frame-url.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/http/frame-url.service.ts ***!
    \***********************************************************/

  /*! exports provided: FrameURLService */

  /***/
  function srcAppSharedServicesHttpFrameUrlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameURLService", function () {
      return FrameURLService;
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


    var _common_globalVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/globalVariables */
    "./src/app/shared/services/common/globalVariables.ts");
    /* harmony import */


    var _constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../constants/gloabal-variable-enums */
    "./src/app/shared/constants/gloabal-variable-enums.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var FrameURLService =
    /*#__PURE__*/
    function () {
      function FrameURLService(_globalVariables) {
        _classCallCheck(this, FrameURLService);

        this._globalVariables = _globalVariables;
      } // Return the Exact path to be sent


      _createClass(FrameURLService, [{
        key: "getHttpFramedURL",
        value: function getHttpFramedURL(requestObj) {
          var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_URL + requestObj.path;
          var path = URL.replace('token', this._globalVariables.getParameterData(_constants_gloabal_variable_enums__WEBPACK_IMPORTED_MODULE_3__["GlobalVariableEnums"].TOKEN));

          if (requestObj.keys.length > 0 && requestObj.values.length > 0) {
            for (var i = 0; i < requestObj.keys.length; i++) {
              // Replaces the word which starts with colon only. which indicates run time value
              path = path.replace(':' + requestObj.keys[i], requestObj.values[i]);
            }
          }

          return path;
        }
      }]);

      return FrameURLService;
    }();

    FrameURLService.ctorParameters = function () {
      return [{
        type: _common_globalVariables__WEBPACK_IMPORTED_MODULE_2__["GlobalVariables"]
      }];
    };

    FrameURLService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FrameURLService);
    /***/
  }
}]);
//# sourceMappingURL=default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6-es5.js.map