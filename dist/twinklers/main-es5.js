function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topbar>\r\n</app-topbar>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSharedComponentsLayoutsAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSharedComponentsLayoutsAuthLayoutAuthLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/product-card/product-card.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/product-card/product-card.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSharedComponentsProductCardProductCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-r-15 m-b-15\" style=\"width: 18rem;\" (click)=\"navigateToDetailedView()\">\r\n  <div class=\"card-body\">\r\n    <img [src]=\"product.imageURL\" height=\"175\" width=\"250\">\r\n    <div class=\"d-flex justify-content-between m-t-15\">\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">{{product.name}}</h6>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\"><span> &#8377;</span>{{product.cost}}</h6>\r\n    </div>\r\n    <div class=\"d-flex justify-content-start\">\r\n      <ng-container *ngFor=\"let rate of [].constructor(product.rating)\">\r\n        <i class=\"fa fa-star\" aria-hidden=\"true\"></i> &nbsp;\r\n      </ng-container>\r\n      <ng-container *ngFor=\"let rate of [].constructor(5 - product.rating)\">\r\n        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> &nbsp;\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between\">\r\n      <div>\r\n        <p class=\"m-b-0 in-stock\" *ngIf=\"product.status === 'INSTOCK'\">\r\n          <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>&nbsp;\r\n          In Stock\r\n        </p>\r\n        <p class=\"m-b-0 no-stock\" *ngIf=\"product.status === 'NOSTOCK'\">\r\n          <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>&nbsp;\r\n          No Stock\r\n        </p>\r\n      </div>\r\n      <div class=\"position-relative\">\r\n        <i class=\"fa fa-minus-square-o font-size-18 pointer\" aria-hidden=\"true\"\r\n          [ngClass]=\"product.productCount <= 0 ? 'disabled' : ''\" (click)=\"decrementProductCount($event)\"></i>&nbsp;\r\n        <i class=\"fa fa-plus-square-o font-size-18 pointer\" aria-hidden=\"true\"\r\n          (click)=\"incrementProductCount($event)\"></i>&nbsp;\r\n        <i class=\"fa fa-shopping-cart font-size-20 pointer\" aria-hidden=\"true\"></i>\r\n        <div class=\"d-flex justify-content-center cart-count\" *ngIf=\"product.productCount > 0\">\r\n          {{product.productCount}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/topbar/topbar.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/topbar/topbar.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSharedComponentsTopbarTopbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg nav\">\r\n  <div class=\"container d-flex justify-content-between w-100\">\r\n    <ul class=\"navbar-nav mr-auto d-flex justify-content-between\">\r\n      <li class=\"nav-item pointer\">\r\n        <p class=\"navbar-brand m-b-0 noselect\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n          Home</p>\r\n      </li>\r\n      <li class=\"nav-item pointer\">\r\n        <p class=\"navbar-brand m-b-0 noselect\" [routerLink]=\"['/products']\" routerLinkActive=\"active\">\r\n          <i class=\"fa fa-\" aria-hidden=\"true\"></i>\r\n          Products</p>\r\n      </li>\r\n    </ul>\r\n    <div>\r\n      <p class=\"navbar-brand pointer\" [routerLink]=\"['/admin']\" routerLinkActive=\"active\"\r\n        *ngIf=\"currentUser?.role.role_id === 1\">\r\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\r\n        <span class=\"m-l-5 noselect\">Admin</span>\r\n      </p>\r\n      <p class=\"navbar-brand pointer\" [routerLink]=\"['/my-account']\" routerLinkActive=\"active\"\r\n        (click)=\"navigateToMyAccount()\">\r\n        <i [ngClass]=\"currentUser?.authToken ? 'fa fa-user' : 'fa fa-sign-in'\" aria-hidden=\"true\"></i>\r\n        <span class=\"m-l-5 noselect\">{{currentUser?.authToken ? 'My Account': 'Login'}}</span></p>\r\n      <p class=\"navbar-brand pointer position-relative\">\r\n        <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n        <span class=\"m-l-5 noselect\">Cart</span>\r\n        <span class=\"cart-count\">{{totalCartCount}}</span>\r\n      </p>\r\n      <p class=\"navbar-brand pointer position-relative p-l-20\" (click)=\"logout()\">\r\n        <i class=\"fa fa-power-off\" aria-hidden=\"true\" ></i>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-user-views-dashboard-dashboard-module */
        "views-user-views-dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./views/user-views/dashboard/dashboard.module */
        "./src/app/views/user-views/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      }
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-user-views-products-products-module */
        "views-user-views-products-products-module").then(__webpack_require__.bind(null,
        /*! ./views/user-views/products/products.module */
        "./src/app/views/user-views/products/products.module.ts")).then(function (m) {
          return m.ProductsModule;
        });
      }
    }, {
      path: 'my-account/login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-auth-views-login-login-module */
        [__webpack_require__.e("default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6"), __webpack_require__.e("common"), __webpack_require__.e("views-auth-views-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./views/auth-views/login/login.module */
        "./src/app/views/auth-views/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'my-account/registration',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-auth-views-registration-registration-module */
        [__webpack_require__.e("default~profile-profile-module~views-auth-views-login-login-module~views-auth-views-registration-reg~fbe267c6"), __webpack_require__.e("common"), __webpack_require__.e("views-auth-views-registration-registration-module")]).then(__webpack_require__.bind(null,
        /*! ./views/auth-views/registration/registration.module */
        "./src/app/views/auth-views/registration/registration.module.ts")).then(function (m) {
          return m.RegistrationModule;
        });
      }
    }, {
      path: 'my-account/forgot-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | views-auth-views-forgot-password-forgot-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("views-auth-views-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
        /*! ./views/auth-views/forgot-password/forgot-password.module */
        "./src/app/views/auth-views/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordModule;
        });
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-admin-views-admin-dashboard-admin-dashboard-module */
        "views-admin-views-admin-dashboard-admin-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./views/admin-views/admin-dashboard/admin-dashboard.module */
        "./src/app/views/admin-views/admin-dashboard/admin-dashboard.module.ts")).then(function (m) {
          return m.AdminDashboardModule;
        });
      }
    }, {
      path: 'my-account/user-management',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-user-views-user-management-user-management-module */
        "views-user-views-user-management-user-management-module").then(__webpack_require__.bind(null,
        /*! ./views/user-views/user-management/user-management.module */
        "./src/app/views/user-views/user-management/user-management.module.ts")).then(function (m) {
          return m.UserManagementModule;
        });
      }
    }, {
      path: '**',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-page-not-found-page-not-found-module */
        "views-page-not-found-page-not-found-module").then(__webpack_require__.bind(null,
        /*! ./views/page-not-found/page-not-found.module */
        "./src/app/views/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent(httpClient) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.httpClient = httpClient;
      this.title = 'twinklers';
      var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
      headers = headers.append('Accept', 'application/json');
      headers = headers.append('api-token', 'wRgD_XjN8begt0Vfn-Py1qvbc-40ppzWROzxHlKHUOYtTRBz6Dk1kHemObNkiaNG9WU');
      headers = headers.append('user-email', 'saichoclate68@gmail.com');
      this.httpClient.get('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: headers
      }).subscribe(function (res) {
        // console.log(res['auth_token']);
        var authTokenHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        authTokenHeaders = authTokenHeaders.append('Authorization', 'Bearer ' + res['auth_token']);
        authTokenHeaders = authTokenHeaders.append('Accept', 'application/json'); // for countries = https://www.universal-tutorial.com/api/countries
        // for states =   https://www.universal-tutorial.com/api/states/{name}
        // for cities = https://www.universal-tutorial.com/api/cities/Alaska

        _this.httpClient.get('https://www.universal-tutorial.com/api/cities/Telangana', {
          headers: authTokenHeaders
        }).subscribe(function (countries) {// console.log(countries);
        });
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/shared/components/layouts/admin-layout/admin-layout.component */
    "./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared/components/topbar/topbar.component */
    "./src/app/shared/shared/components/topbar/topbar.component.ts");
    /* harmony import */


    var _shared_shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared/components/layouts/auth-layout/auth-layout.component */
    "./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_services_http_header_interceptors_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/services/http/header-interceptors.service */
    "./src/app/shared/services/http/header-interceptors.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _shared_shared_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"], _shared_shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"], _shared_shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _shared_services_http_header_interceptors_service__WEBPACK_IMPORTED_MODULE_10__["HeaderInterceptorsService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared/constants/local-storage-enums.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/constants/local-storage-enums.ts ***!
    \*********************************************************/

  /*! exports provided: LOCAL_STORAGE_ENUMS */

  /***/
  function srcAppSharedConstantsLocalStorageEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_ENUMS", function () {
      return LOCAL_STORAGE_ENUMS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LOCAL_STORAGE_ENUMS = {
      USERINFO: 'userInfo'
    };
    /***/
  },

  /***/
  "./src/app/shared/modules/custom/custom.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/modules/custom/custom.module.ts ***!
    \********************************************************/

  /*! exports provided: CustomModule */

  /***/
  function srcAppSharedModulesCustomCustomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomModule", function () {
      return CustomModule;
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


    var _pipes_highlight_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pipes/highlight-search.pipe */
    "./src/app/shared/pipes/highlight-search.pipe.ts");
    /* harmony import */


    var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/product-card/product-card.component */
    "./src/app/shared/shared/components/product-card/product-card.component.ts"); // Custom Directives


    var CustomModule = function CustomModule() {
      _classCallCheck(this, CustomModule);
    };

    CustomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pipes_highlight_search_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightSearchPipe"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_pipes_highlight_search_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightSearchPipe"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__["ProductCardComponent"]]
    })], CustomModule);
    /***/
  },

  /***/
  "./src/app/shared/modules/predefined/predefined.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/modules/predefined/predefined.module.ts ***!
    \****************************************************************/

  /*! exports provided: PredefinedModule */

  /***/
  function srcAppSharedModulesPredefinedPredefinedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredefinedModule", function () {
      return PredefinedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // Angular Moudles


    var PredefinedModule = function PredefinedModule() {
      _classCallCheck(this, PredefinedModule);
    };

    PredefinedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]],
      exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]]
    })], PredefinedModule);
    /***/
  },

  /***/
  "./src/app/shared/pipes/highlight-search.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/pipes/highlight-search.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: HighlightSearchPipe */

  /***/
  function srcAppSharedPipesHighlightSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function () {
      return HighlightSearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HighlightSearchPipe =
    /*#__PURE__*/
    function () {
      function HighlightSearchPipe() {
        _classCallCheck(this, HighlightSearchPipe);
      }

      _createClass(HighlightSearchPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (!args) {
            return value;
          }

          var re = new RegExp(args, 'gi'); // 'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.

          return value.replace(re, '<mark>' + args + '</mark>');
        }
      }]);

      return HighlightSearchPipe;
    }();

    HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'highlightSearch'
    })], HighlightSearchPipe);
    /***/
  },

  /***/
  "./src/app/shared/services/common/common.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/common/common.service.ts ***!
    \**********************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedServicesCommonCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../constants/local-storage-enums */
    "./src/app/shared/constants/local-storage-enums.ts");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../storage/storage.service */
    "./src/app/shared/services/storage/storage.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./utils */
    "./src/app/shared/services/common/utils.ts");

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(storageService, router) {
        _classCallCheck(this, CommonService);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(CommonService, [{
        key: "getUserInfo",
        value: function getUserInfo() {
          var userInfo = this.storageService.getLocalStorageItem(_constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE_ENUMS"].USERINFO);

          if (userInfo) {
            return JSON.parse(_utils__WEBPACK_IMPORTED_MODULE_5__["default"].avoidShallowClone(userInfo));
          } else {
            return null;
          }
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(input) {
          this.storageService.setLocalStorageItem(_constants_local_storage_enums__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE_ENUMS"].USERINFO, input);
        }
      }, {
        key: "checkAndLogout",
        value: function checkAndLogout() {
          var userInfo = this.getUserInfo();

          if (!_utils__WEBPACK_IMPORTED_MODULE_5__["default"].isValidInput(userInfo)) {
            alert('something went rwrong please login and try');
            this.router.navigate(['my-account', 'login']);
          }
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/shared/services/common/utils.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/common/utils.ts ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedServicesCommonUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Utils;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var Utils =
    /*#__PURE__*/
    function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, null, [{
        key: "isSm",

        /**
         * Check if the opened device is Mobile (or Tablet) vs Desktop
         */
        value: function isSm() {
          return window.matchMedia("(max-width: 959px)").matches;
        }
        /**
         * Used to scroll to top of the page whenever pagination is done or a new page is invoked.
         */

      }, {
        key: "gotoTopOfPage",
        value: function gotoTopOfPage() {
          Utils.log('***** Going to top of page ******');
          window.scrollTo(0, 0); // TODO - create a diffent method or pass the value for scrol into view

          try {
            document.getElementById('adminRouterOutlet').scrollIntoView();
            document.getElementById('adminRouterOutlet').focus();
          } catch (e) {}
        }
        /**
         * Create a new guid value. Can be used for random generation of unique ids.
         */

      }, {
        key: "newGuid",
        value: function newGuid() {
          var result = '';
          var i = '';

          for (var j = 0; j < 32; j++) {
            if (j === 8 || j === 12 || j === 16 || j === 20) {
              result = result + '-';
            }

            i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
            result = result + i;
          }

          return result;
        }
      }, {
        key: "trimTrailingCharacter",
        value: function trimTrailingCharacter(input, trailingChar) {
          if (Utils.isValidInput(input)) {
            if (input.indexOf(trailingChar)) {
              var output = input.trim();

              if (output.substr(output.length - 1, 1) === trailingChar) {
                output = output.substr(0, output.length - 1).trim();
              }

              return output;
            } else {
              return input.trim();
            }
          } else {
            return input;
          }
        } // static getPhraseErrorMessage(error, genericMessage) {
        //  Utils.log("Error in getPhraseErrorMessage: " + Utils.stringify(error));
        //  if (Utils.isValidInput(error["errorCode"])) {
        //    let lobjErrorRequest: any;
        //    lobjErrorRequest = Utils.getObjectFromArray(AppEnums.ERRORS, "CODE", parseInt(error["errorCode"]));
        //    if (Utils.isValidInput(lobjErrorRequest) && Utils.isValidInput(lobjErrorRequest.PHRASE)) {
        //      return lobjErrorRequest.PHRASE;
        //    } else {
        //      return "COMMON.ERRORS.GENERIC_SERVER_ERROR";
        //    }
        //  } else {
        //    if (Utils.isValidInput(genericMessage)) {
        //      return genericMessage;
        //    } else {
        //      return "COMMON.ERRORS.GENERIC_SERVER_ERROR";
        //    }
        //  }
        // }

      }, {
        key: "getObjectFromArray",
        value: function getObjectFromArray(inputArray, key, id) {
          var arrayOfKeys = Object.keys(inputArray);
          var lobjX;
          arrayOfKeys.forEach(function (element) {
            var lobjObj = inputArray[element];

            if (String(lobjObj[key]) === String(id)) {
              lobjX = lobjObj;
              return;
            }
          });
          return lobjX;
        }
      }, {
        key: "convertArrayToCommaSeparatedString",
        value: function convertArrayToCommaSeparatedString(pobjArray) {
          var outputText = '';

          if (Utils.isValidInput(pobjArray)) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < pobjArray.length; i++) {
              outputText = outputText + pobjArray[i].value + ', ';
            }

            outputText = outputText.trim();
            outputText = outputText.substring(0, outputText.length - 1);
          }

          return outputText;
        }
      }, {
        key: "toIsoString",
        value: function toIsoString(input) {
          // tslint:disable-next-line:one-variable-per-declaration
          var tzo = -input.getTimezoneOffset(),
              dif = tzo >= 0 ? '+' : '-',
              pad = function pad(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
          };

          return input.getFullYear() + '-' + pad(input.getMonth() + 1) + '-' + pad(input.getDate()) + 'T' + pad(input.getHours()) + ':' + pad(input.getMinutes()) + ':' + pad(input.getSeconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
        }
      }, {
        key: "convertInputToString",
        value: function convertInputToString(input) {
          if (Utils.isValidInput(input)) {
            return String(input);
          } else {
            return '';
          }
        }
      }, {
        key: "getDateInCustomFormat",
        value: function getDateInCustomFormat(inputDateString) {
          var inputDate = new Date(inputDateString);
          var date = String(inputDate.getDate() < 10 ? '0' + inputDate.getDate() : inputDate.getDate());
          var month = String(inputDate.getMonth() + 1 < 10 ? '0' + (inputDate.getMonth() + 1) : inputDate.getMonth() + 1);
          var fullyear = String(inputDate.getFullYear());
          var hours = String(inputDate.getHours() < 10 ? '0' + inputDate.getHours() : inputDate.getHours());
          var minutes = String(inputDate.getMinutes() < 10 ? '0' + inputDate.getMinutes() : inputDate.getMinutes());
          var seconds = String(inputDate.getSeconds() < 10 ? '0' + inputDate.getSeconds() : inputDate.getSeconds());
          return date + '-' + month + '-' + fullyear + ' ' + hours + ':' + minutes + ':' + seconds;
        }
      }, {
        key: "getTime",
        value: function getTime(inputString) {
          try {
            var arr = inputString.split(/[- :]/);
            var inputDateFormat = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10));
            var inputDate = new Date(inputDateFormat);
            var hours = inputDate.getHours();
            var minutes = inputDate.getMinutes();
            var hoursString = '';
            var minutesString = '';
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hoursString = String(hours ? hours : 12); // the hour '0' should be '12;

            minutesString = String(minutes < 10 ? '0' + minutes : minutes);
            return hoursString + ':' + minutesString + ' ' + ampm;
          } catch (e) {
            Utils.log('Error in Utils : getTime ' + e);
          }
        }
      }, {
        key: "getTimeFromString",
        value: function getTimeFromString(inputString) {
          try {
            var arr = inputString.split(' ');
            var inputDateFormat = new Date(inputString);
            var inputDate = new Date(inputDateFormat);
            var hours = inputDate.getHours();
            var minutes = inputDate.getMinutes();
            var hoursString = '';
            var minutesString = '';
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hoursString = String(hours ? hours : 12); // the hour '0' should be '12;

            minutesString = String(minutes < 10 ? '0' + minutes : minutes);
            return hoursString + ':' + minutesString + ' ' + ampm;
          } catch (e) {
            Utils.log('Error in Utils : getTime ' + e);
          }
        }
      }, {
        key: "convertStringToNumber",
        value: function convertStringToNumber(input, defaultValue) {
          if (Utils.isValidInput(input)) {
            return parseInt(input, 10);
          } else {
            return defaultValue;
          }
        }
      }, {
        key: "getObjectByFilter",
        value: function getObjectByFilter(arrayToFilter, key, id) {
          return arrayToFilter.filter(function (x) {
            return x[key] === id;
          });
        }
      }, {
        key: "getObjectByFind",
        value: function getObjectByFind(arrayToFilter, key, id) {
          return arrayToFilter.find(function (x) {
            return x[key] === id;
          });
        }
      }, {
        key: "getByIndex",
        value: function getByIndex(customObject, index) {
          return customObject[Object.keys(customObject)[index]];
        }
      }, {
        key: "getObjectNameByIndex",
        value: function getObjectNameByIndex(customObject, index) {
          return Object.keys(customObject)[index];
        }
      }, {
        key: "log",
        value: function log(message) {
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].logger.enabled === true) {
            console.log(message);
          }
        }
      }, {
        key: "stringify",
        value: function stringify(input) {
          try {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].logger.enabled === true) {
              return JSON.stringify(input, null, '    ');
            } else {
              return JSON.stringify(input);
            }
          } catch (e) {
            Utils.log('Error in Utilities - stringify method: ' + e);
          }
        }
      }, {
        key: "convertStringToDate",
        value: function convertStringToDate(dateStr) {
          var parts = dateStr.split('/');
          return new Date(parts[2], parts[1] - 1, parts[0]);
        }
      }, {
        key: "getISOStringFromServerDateString",
        value: function getISOStringFromServerDateString(dateStr) {
          if (Utils.isValidInput(dateStr)) {
            var dateonly = dateStr.split(' ');
            var parts = dateonly[0].split('-');
            return new Date(parts[0], parts[1] - 1, parts[2]).toISOString();
          } else {
            return '';
          }
        }
      }, {
        key: "getDateFromServerDateString",
        value: function getDateFromServerDateString(dateStr) {
          if (Utils.isValidInput(dateStr)) {
            var dateonly = dateStr.split(' ');
            var parts = dateonly[0].split('-');
            return new Date(parts[0], parts[1] - 1, parts[2]);
          } else {
            return new Date();
          }
        }
      }, {
        key: "getDateBySeperator",
        value: function getDateBySeperator(dateStr, seperator) {
          try {
            var date = new Date(dateStr);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var dayString = '';
            var monthString = '';
            dayString = day < 10 ? '0' + day.toString() : day.toString();
            monthString = month < 10 ? '0' + month.toString() : month.toString();
            var result = dayString + seperator + monthString + seperator + year;
            return result;
          } catch (e) {
            return 'N/A';
          }
        }
      }, {
        key: "convertStringToBoolean",
        value: function convertStringToBoolean(input) {
          if (Utils.isValidInput(input)) {
            if (input.toLowerCase() === 'y' || input === '0' || input.toLowerCase() === 'true') {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "convertNumberToBoolean",
        value: function convertNumberToBoolean(input) {
          if (Utils.isValidInput(input)) {
            if (input === 0) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "cloneObject",
        value: function cloneObject(input) {
          return JSON.parse(JSON.stringify(input));
        }
      }, {
        key: "convertBooleanToString",
        value: function convertBooleanToString(input) {
          if (Utils.isValidInput(input)) {
            if (input === true || input === 'true') {
              return 'Y';
            } else {
              return 'N';
            }
          } else {
            return 'N';
          }
        }
      }, {
        key: "convertBooleanToNumber",
        value: function convertBooleanToNumber(input) {
          if (Utils.isValidInput(input)) {
            if (input === true || input === 'true') {
              return 0;
            } else {
              return 1;
            }
          } else {
            return 0;
          }
        }
      }, {
        key: "preventNumberInput",
        value: function preventNumberInput(event) {
          if (event.keyCode > 47 && event.keyCode < 58 || event.keyCode > 96 && event.keyCode < 123 || event.keyCode > 64 && event.keyCode < 91) {
            event.preventDefault();
          }
        }
      }, {
        key: "replaceAll",
        value: function replaceAll(str, find, replace) {
          return this.replaceText(str, new RegExp(find, 'g'), replace);
        }
      }, {
        key: "replaceText",
        value: function replaceText(str, find, replace) {
          if (this.isValidInput(str)) {
            return str.replace(find, replace);
          } else {
            return str;
          }
        }
      }, {
        key: "toDisallowCharacters",
        value: function toDisallowCharacters(event, charCodeToDisallow) {
          var charCode = event.which || event.keyCode;

          if (charCode === charCodeToDisallow) {
            event.preventDefault();
          }
        }
      }, {
        key: "datecompare",
        value: function datecompare(date1, sign, date2) {
          var day1 = date1.getDate();
          var mon1 = date1.getMonth();
          var year1 = date1.getFullYear();
          var day2 = date2.getDate();
          var mon2 = date2.getMonth();
          var year2 = date2.getFullYear();

          if (sign === '===') {
            if (day1 === day2 && mon1 === mon2 && year1 === year2) {
              return true;
            } else {
              return false;
            }
          } else if (sign === '>') {
            if (year1 > year2) {
              return true;
            } else if (year1 === year2 && mon1 > mon2) {
              return true;
            } else if (year1 === year2 && mon1 === mon2 && day1 > day2) {
              return true;
            } else {
              return false;
            }
          } else if (sign === '<') {
            if (year1 < year2) {
              return true;
            } else if (year1 === year2 && mon1 < mon2) {
              return true;
            } else if (year1 === year2 && mon1 === mon2 && day1 < day2) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "formatCurrencyValue",
        value: function formatCurrencyValue(input) {
          return parseFloat(input).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(input) {
          if (typeof input === 'undefined') {
            return true;
          } else {
            var lstrTempstring = String(input);
            lstrTempstring = lstrTempstring.trim();

            if (lstrTempstring === '' || lstrTempstring === 'undefined') {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "isUndefined",
        value: function isUndefined(input) {
          if (typeof input === 'undefined') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isNull",
        value: function isNull(input) {
          if (input != null) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "isValidInput",
        value: function isValidInput(input) {
          if (Utils.isNull(input) || Utils.isUndefined(input) || Utils.isEmpty(input)) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "isEmptyObject",
        value: function isEmptyObject(myObject) {
          if (Object.keys(myObject).length > 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "truncate",
        value: function truncate(input, truncatetext) {
          if (Utils.isValidInput(input)) {
            return input.replace(truncatetext, '');
          } else {
            return input;
          }
        }
      }, {
        key: "removeUnwantedSpaces",
        value: function removeUnwantedSpaces(input) {
          return input.replace(/^\s\s*/, '') // Remove Preceding white space
          .replace(/\s\s*$/, ''); // Remove Trailing white space
        }
      }, {
        key: "escapeInput",
        value: function escapeInput(input) {
          var output = input;
          output = this.replaceAll(output, '"', '\"'); // tslint:disable-next-line:quotemark

          output = this.replaceAll(output, '\'', "\'");
          return output;
        }
      }, {
        key: "returnEmptyStringForInvalidInput",
        value: function returnEmptyStringForInvalidInput(input) {
          if (this.isValidInput(input)) {
            return input;
          } else {
            return '';
          }
        }
      }, {
        key: "setFocus",
        value: function setFocus(element) {
          setTimeout(function () {
            document.getElementById(element).focus();
          }, 50);
        } // to avoid shallow copy and making into deep copy

      }, {
        key: "avoidShallowClone",
        value: function avoidShallowClone(input) {
          return JSON.parse(JSON.stringify(input));
        } // get isObject or not

      }, {
        key: "getIsObject",
        value: function getIsObject(input) {
          if (typeof input !== 'string' && typeof input !== 'number' && typeof input !== 'boolean') {
            return true;
          } else {
            return false;
          }
        }
        /**
         * Convert Any string to Title case from typescript
         * @param str Any string
         */

      }, {
        key: "toTitleCase",
        value: function toTitleCase(str) {
          return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        }
      }, {
        key: "getCookie",
        value: function getCookie(cname) {
          var name = cname + '=';
          var decodedCookie = decodeURIComponent(document.cookie);
          var ca = decodedCookie.split(';'); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) === ' ') {
              c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
            }
          }

          return '';
        }
      }]);

      return Utils;
    }();

    Utils.stringifyObjectWithNoQuotesOnKeys = function (objFromJson) {
      // In case of an array we'll stringify all objects.
      if (Array.isArray(objFromJson)) {
        return "[".concat(objFromJson.map(function (obj) {
          return "".concat(Utils.stringifyObjectWithNoQuotesOnKeys(obj));
        }).join(','), "]");
      } // not an object, stringify using native function


      if (typeof objFromJson !== 'object' || objFromJson instanceof Date || objFromJson === null) {
        return JSON.stringify(objFromJson);
      } // Implements recursive object serialization according to JSON spec
      // but without quotes around the keys.


      return "{".concat(Object.keys(objFromJson).map(function (key) {
        return "".concat(key, ":").concat(Utils.stringifyObjectWithNoQuotesOnKeys(objFromJson[key]));
      }).join(','), "}");
    };
    /***/

  },

  /***/
  "./src/app/shared/services/http/header-interceptors.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/services/http/header-interceptors.service.ts ***!
    \*********************************************************************/

  /*! exports provided: HeaderInterceptorsService */

  /***/
  function srcAppSharedServicesHttpHeaderInterceptorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderInterceptorsService", function () {
      return HeaderInterceptorsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/utils */
    "./src/app/shared/services/common/utils.ts");

    var HeaderInterceptorsService =
    /*#__PURE__*/
    function () {
      function HeaderInterceptorsService(commonService) {
        _classCallCheck(this, HeaderInterceptorsService);

        this.commonService = commonService;
      }

      _createClass(HeaderInterceptorsService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var defaultHeaders = {
            'Content-Type': 'application/json; charset=UTF-8'
          };
          var userInfo = this.commonService.getUserInfo();

          if (_common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].isValidInput(userInfo)) {
            var authToken = userInfo.authToken;

            if (authToken) {
              defaultHeaders['Authorization'] = authToken;
            }
          }

          if (req.headers.keys().length > 0) {
            // This replaces default headers if any headers passed at the request time
            req.headers.keys().forEach(function (headerKey) {
              if (headerKey === 'Content-Type' && req.headers.get(headerKey) === 'multipart/form-data') {
                delete defaultHeaders['Content-Type'];
              } else {
                defaultHeaders[headerKey] = req.headers.get(headerKey);
              }
            });
          }

          var modifiedReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](defaultHeaders)
          });
          return next.handle(modifiedReq);
        }
      }]);

      return HeaderInterceptorsService;
    }();

    HeaderInterceptorsService.ctorParameters = function () {
      return [{
        type: _common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
      }];
    };

    HeaderInterceptorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], HeaderInterceptorsService);
    /***/
  },

  /***/
  "./src/app/shared/services/storage/encrypt-dectrypt.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/services/storage/encrypt-dectrypt.service.ts ***!
    \*********************************************************************/

  /*! exports provided: EncryptDectryptService */

  /***/
  function srcAppSharedServicesStorageEncryptDectryptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncryptDectryptService", function () {
      return EncryptDectryptService;
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


    var simple_crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! simple-crypto-js */
    "./node_modules/simple-crypto-js/build/SimpleCrypto.js");
    /* harmony import */


    var simple_crypto_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(simple_crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/utils */
    "./src/app/shared/services/common/utils.ts");

    var EncryptDectryptService =
    /*#__PURE__*/
    function () {
      function EncryptDectryptService() {
        _classCallCheck(this, EncryptDectryptService);

        this.secretKey = 'd0aafd6c38a2d836310067e13462b113541acb0267d50c5657fceb1b2cac9e38wr1t89pDG/jKzKuZRI1UvQ==';
        this.simpleCrypto = new simple_crypto_js__WEBPACK_IMPORTED_MODULE_2__["SimpleCrypto"](this.secretKey);
      }

      _createClass(EncryptDectryptService, [{
        key: "getCipherText",
        value: function getCipherText(input) {
          if (_common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getIsObject(input)) {
            return this.simpleCrypto.encryptObject(input);
          }

          return this.simpleCrypto.encrypt(input);
        }
      }, {
        key: "getNormalText",
        value: function getNormalText(input) {
          if (_common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getIsObject(input)) {
            return this.simpleCrypto.decryptObject(input);
          }

          return this.simpleCrypto.decrypt(input);
        }
      }]);

      return EncryptDectryptService;
    }();

    EncryptDectryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EncryptDectryptService);
    /***/
  },

  /***/
  "./src/app/shared/services/storage/storage.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/storage/storage.service.ts ***!
    \************************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _encrypt_dectrypt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./encrypt-dectrypt.service */
    "./src/app/shared/services/storage/encrypt-dectrypt.service.ts");

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService(encryptDectryptService) {
        _classCallCheck(this, StorageService);

        this.encryptDectryptService = encryptDectryptService;
      }

      _createClass(StorageService, [{
        key: "setLocalStorageItem",
        value: function setLocalStorageItem(key, value) {
          if (value) {
            if (typeof value === 'string') {
              localStorage.setItem(key, this.encryptDectryptService.getCipherText(value));
            } else {
              localStorage.setItem(key, this.encryptDectryptService.getCipherText(JSON.stringify(value)));
            }
          }
        }
      }, {
        key: "getLocalStorageItem",
        value: function getLocalStorageItem(key) {
          if (key && localStorage.getItem(key)) {
            try {
              return this.encryptDectryptService.getNormalText(JSON.parse(localStorage.getItem(key)));
            } catch (ex) {
              return this.encryptDectryptService.getNormalText(localStorage.getItem(key));
            }
          }
        }
      }, {
        key: "deleteLocalStorageItem",
        value: function deleteLocalStorageItem(keys) {
          if (keys instanceof Array) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var iterator = _step.value;
                localStorage.removeItem(iterator);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            localStorage.removeItem(keys);
          }
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _encrypt_dectrypt_service__WEBPACK_IMPORTED_MODULE_2__["EncryptDectryptService"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _modules_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/custom/custom.module */
    "./src/app/shared/modules/custom/custom.module.ts");
    /* harmony import */


    var _modules_predefined_predefined_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/predefined/predefined.module */
    "./src/app/shared/modules/predefined/predefined.module.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _modules_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__["CustomModule"], _modules_predefined_predefined_module__WEBPACK_IMPORTED_MODULE_4__["PredefinedModule"]],
      exports: [_modules_custom_custom_module__WEBPACK_IMPORTED_MODULE_3__["CustomModule"], _modules_predefined_predefined_module__WEBPACK_IMPORTED_MODULE_4__["PredefinedModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedComponentsLayoutsAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppSharedSharedComponentsLayoutsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent() {
        _classCallCheck(this, AdminLayoutComponent);
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/shared/shared/components/layouts/admin-layout/admin-layout.component.scss")).default]
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedComponentsLayoutsAuthLayoutAuthLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AuthLayoutComponent */

  /***/
  function srcAppSharedSharedComponentsLayoutsAuthLayoutAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthLayoutComponent =
    /*#__PURE__*/
    function () {
      function AuthLayoutComponent() {
        _classCallCheck(this, AuthLayoutComponent);
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-layout.component.scss */
      "./src/app/shared/shared/components/layouts/auth-layout/auth-layout.component.scss")).default]
    })], AuthLayoutComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared/components/product-card/product-card.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared/shared/components/product-card/product-card.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedComponentsProductCardProductCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fa-star {\n  color: orangered;\n}\n\n.in-stock, .no-stock {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.in-stock .fa-circle {\n  color: darkgreen;\n}\n\n.no-stock .fa-circle {\n  color: red;\n}\n\n.w-18rem {\n  width: 18rem;\n}\n\n.cart-count {\n  border: 1px solid none;\n  background-color: #ff7e00;\n  color: white;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  font-size: 8px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHNoYXJlZFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9kdWN0LWNhcmRcXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7QUNGSjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0VBQ0EseUJFekJXO0VGMEJYLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4uZmEtc3RhciB7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4uaW4tc3RvY2ssIC5uby1zdG9ja3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbi1zdG9jayAuZmEtY2lyY2xlIHtcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbi5uby1zdG9jayAuZmEtY2lyY2xlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4udy0xOHJlbSB7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbn1cclxuXHJcbi5jYXJ0LWNvdW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuIiwiLmZhLXN0YXIge1xuICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG4uaW4tc3RvY2ssIC5uby1zdG9jayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmluLXN0b2NrIC5mYS1jaXJjbGUge1xuICBjb2xvcjogZGFya2dyZWVuO1xufVxuXG4ubm8tc3RvY2sgLmZhLWNpcmNsZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi53LTE4cmVtIHtcbiAgd2lkdGg6IDE4cmVtO1xufVxuXG4uY2FydC1jb3VudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdlMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHBhZGRpbmc6IDFweDtcbn0iLCIkZ3JlZW4tY29sb3I6ICM2ODlmMzg7XHJcbiR3aGl0ZS1jb2xvcjogd2hpdGU7XHJcbiRvcmFuZ2UtY29sb3I6ICNmZjdlMDA7XHJcbiRjaG9jbGF0ZS1jb2xvcjogIzM4MjYxMDtcclxuJGxpZ2h0LWdyZXk6ICM4MDgwODAyOTsiXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/shared/components/product-card/product-card.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/shared/components/product-card/product-card.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProductCardComponent */

  /***/
  function srcAppSharedSharedComponentsProductCardProductCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function () {
      return ProductCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductCardComponent =
    /*#__PURE__*/
    function () {
      function ProductCardComponent() {
        _classCallCheck(this, ProductCardComponent);

        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cardClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "incrementProductCount",
        value: function incrementProductCount(event) {
          event.stopPropagation();
          this.addItem.emit(this.product);
        }
      }, {
        key: "decrementProductCount",
        value: function decrementProductCount() {
          event.stopPropagation();
          this.removeItem.emit(this.product);
        }
      }, {
        key: "navigateToDetailedView",
        value: function navigateToDetailedView() {
          this.cardClickEvent.emit(this.product);
        }
      }]);

      return ProductCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductCardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductCardComponent.prototype, "addItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductCardComponent.prototype, "removeItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductCardComponent.prototype, "cardClickEvent", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/product-card/product-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-card.component.scss */
      "./src/app/shared/shared/components/product-card/product-card.component.scss")).default]
    })], ProductCardComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared/components/topbar/topbar.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/shared/components/topbar/topbar.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedComponentsTopbarTopbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-brand {\n  font-size: 1rem;\n}\n\n.navbar-brand:focus {\n  outline: none;\n}\n\n.nav {\n  background-color: #382610;\n  color: white;\n}\n\n.navbar-nav {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.active {\n  color: darkgrey;\n  text-decoration: underline;\n}\n\n.cart-count {\n  background-color: #ff7e00;\n  color: white;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  right: -16px;\n  padding: 1px;\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhci9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHNoYXJlZFxcc2hhcmVkXFxjb21wb25lbnRzXFx0b3BiYXJcXHRvcGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaGFyZWQvY29tcG9uZW50cy90b3BiYXIvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0kseUJFUGE7RUZRYixZRVZVO0FEVWQ7O0FER0E7RUFDSSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQvY29tcG9uZW50cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaG9jbGF0ZS1jb2xvcjtcclxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jYXJ0LWNvdW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdlMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTZweDtcclxuICAgIHJpZ2h0OiAtMTZweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICAgIiwiLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgyNjEwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jYXJ0LWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgcGFkZGluZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIiRncmVlbi1jb2xvcjogIzY4OWYzODtcclxuJHdoaXRlLWNvbG9yOiB3aGl0ZTtcclxuJG9yYW5nZS1jb2xvcjogI2ZmN2UwMDtcclxuJGNob2NsYXRlLWNvbG9yOiAjMzgyNjEwO1xyXG4kbGlnaHQtZ3JleTogIzgwODA4MDI5OyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/shared/components/topbar/topbar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/shared/components/topbar/topbar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppSharedSharedComponentsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/common/common.service */
    "./src/app/shared/services/common/common.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _topbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topbar.service */
    "./src/app/shared/shared/components/topbar/topbar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TopbarComponent =
    /*#__PURE__*/
    function () {
      function TopbarComponent(topbarService, router, commonService) {
        var _this2 = this;

        _classCallCheck(this, TopbarComponent);

        this.topbarService = topbarService;
        this.router = router;
        this.commonService = commonService;
        this.totalCartCount = 0;
        this.topbarService.cartCountSubject.subscribe(function (res) {
          _this2.totalCartCount = res;
        });
        this.topbarService.userInfoChanged.subscribe(function (res) {
          _this2.currentUser = _this2.commonService.getUserInfo();
        });
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToMyAccount",
        value: function navigateToMyAccount() {
          this.router.navigate(['my-account', 'login']);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.topbarService.setUserInfoChange(true);
          this.router.navigate(['dashboard']);
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ctorParameters = function () {
      return [{
        type: _topbar_service__WEBPACK_IMPORTED_MODULE_3__["TopbarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
      }];
    };

    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-topbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared/components/topbar/topbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topbar.component.scss */
      "./src/app/shared/shared/components/topbar/topbar.component.scss")).default]
    })], TopbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared/components/topbar/topbar.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/shared/components/topbar/topbar.service.ts ***!
    \*******************************************************************/

  /*! exports provided: TopbarService */

  /***/
  function srcAppSharedSharedComponentsTopbarTopbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarService", function () {
      return TopbarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/common/common.service */
    "./src/app/shared/services/common/common.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TopbarService =
    /*#__PURE__*/
    function () {
      function TopbarService(commonService) {
        _classCallCheck(this, TopbarService);

        this.commonService = commonService;
        this.cartCount = 0;
        this.cartCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.userInfoChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false); // sample

        this.products = [{
          name: 'Product 1',
          imageURL: 'assets/images/products/product-1.jpg',
          status: 'INSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 1
        }, {
          name: 'Product 2',
          imageURL: 'assets/images/products/product-2.jfif',
          status: 'INSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 2
        }, {
          name: 'Product 3',
          imageURL: 'assets/images/products/product-3.jfif',
          status: 'INSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 3
        }, {
          name: 'Product 4',
          imageURL: 'assets/images/products/product-4.jpg',
          status: 'INSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 4
        }, {
          name: 'Product 5',
          imageURL: 'assets/images/products/product-5.jfif',
          status: 'NOSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 5
        }, {
          name: 'Product 6',
          imageURL: 'assets/images/products/product-6.jfif',
          status: 'NOSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 6
        }, {
          name: 'Product 7',
          imageURL: 'assets/images/products/product-7.jpg',
          status: 'NOSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 7
        }, {
          name: 'Product 8',
          imageURL: 'assets/images/products/product-8.jfif',
          status: 'NOSTOCK',
          productCount: 0,
          rating: 3,
          cost: 200,
          id: 8
        }];
      }

      _createClass(TopbarService, [{
        key: "setCartCount",
        value: function setCartCount(productArray) {
          var totalCartCount = productArray.map(function (obj) {
            return obj.productCount;
          }).reduce(function (sum, currentValue) {
            return sum + currentValue;
          });
          this.cartCountSubject.next(totalCartCount);
        }
      }, {
        key: "setUserInfoChange",
        value: function setUserInfoChange(input) {
          this.userInfoChanged.next(input);
        }
      }]);

      return TopbarService;
    }();

    TopbarService.ctorParameters = function () {
      return [{
        type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
      }];
    };

    TopbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], TopbarService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      logger: {
        // level: Level.LOG,
        enabled: true
      },
      // Any base url of the application which is common for all request
      BASE_URL: 'http://localhost:4500'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\dream_startups\soruce_code\twinklers\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map