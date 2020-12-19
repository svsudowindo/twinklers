function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/guard-services/can-activate.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/services/guard-services/can-activate.service.ts ***!
    \************************************************************************/

  /*! exports provided: CanActivateService */

  /***/
  function srcAppSharedServicesGuardServicesCanActivateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActivateService", function () {
      return CanActivateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../common/common.service */
    "./src/app/shared/services/common/common.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/utils */
    "./src/app/shared/services/common/utils.ts");

    var CanActivateService =
    /*#__PURE__*/
    function () {
      function CanActivateService(router, commonService) {
        _classCallCheck(this, CanActivateService);

        this.router = router;
        this.commonService = commonService;
      }

      _createClass(CanActivateService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var userInfo = this.commonService.getUserInfo();

          if (_common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isValidInput(userInfo) && _common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isValidInput(userInfo.authToken)) {
            this.router.navigate(['my-account', 'user-management']);
          } else {
            return true;
          }
        }
      }]);

      return CanActivateService;
    }();

    CanActivateService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
      }];
    };

    CanActivateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CanActivateService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map