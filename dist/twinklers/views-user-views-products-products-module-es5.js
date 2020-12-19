function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-views-products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/products/products.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/products/products.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsUserViewsProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-end acordian\">\r\n  <p>\r\n    <i class=\"fa fa-filter\" aria-hidden=\"true\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\"></i>\r\n  </p>\r\n</div>\r\n\r\n<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n  <div class=\"d-flex flex-wrap justify-content-center align-items-center filters-styling\">\r\n    <div class=\"m-r-10 w-18rem\">\r\n      <label>Catogery</label>\r\n      <select class=\"form-control\">\r\n        <option selected>All</option>\r\n        <option>Black Choclates</option>\r\n        <option>Dark Choclates</option>\r\n        <option>White Choclates</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"m-r-10 w-18rem\">\r\n      <label>Price Range: </label>\r\n      <select class=\"form-control\">\r\n        <option selected>All</option>\r\n        <option>Black Choclates</option>\r\n        <option>Dark Choclates</option>\r\n        <option>White Choclates</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"d-flex flex-wrap  justify-content-center align-items-center m-t-20\">\r\n  <ng-container *ngFor=\"let product of products; let i = index\">\r\n    <div>\r\n      <app-product-card [product]=\"product\" (addItem)=\"incrementProductCount($event, i)\"\r\n        (removeItem)=\"decrementProductCount($event, i)\" (cardClickEvent)=\"navigateToProductDetailedView($event)\"></app-product-card>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/views/user-views/products/products-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/views/user-views/products/products-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppViewsUserViewsProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/views/user-views/products/products.component.ts");
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
      children: [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | product-item-product-item-module */
          "product-item-product-item-module").then(__webpack_require__.bind(null,
          /*! ./product-item/product-item.module */
          "./src/app/views/user-views/products/product-item/product-item.module.ts")).then(function (m) {
            return m.ProductItemModule;
          });
        }
      }]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/user-views/products/products.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/views/user-views/products/products.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsUserViewsProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filters {\n  width: 286px;\n}\n\n.w-18rem {\n  width: 18rem;\n}\n\n.filters-styling {\n  background-color: #80808029;\n  padding-bottom: 20px;\n  padding-top: 20px;\n}\n\n.acordian {\n  background-color: #80808029;\n}\n\n.fa-filter {\n  font-size: 30px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci12aWV3cy9wcm9kdWN0cy9EOlxcZHJlYW1fc3RhcnR1cHNcXHNvcnVjZV9jb2RlXFx0d2lua2xlcnMvc3JjXFxhcHBcXHZpZXdzXFx1c2VyLXZpZXdzXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3VzZXItdmlld3MvcHJvZHVjdHMvRDpcXGRyZWFtX3N0YXJ0dXBzXFxzb3J1Y2VfY29kZVxcdHdpbmtsZXJzL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksMkJFUlM7RUZTVCxvQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FESUE7RUFDSSwyQkViUztBRFliOztBRElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyLXZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi5maWx0ZXJzIHtcclxuICAgIHdpZHRoOiAyODZweDtcclxufVxyXG5cclxuLnctMThyZW0ge1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG59XHJcblxyXG4uZmlsdGVycy1zdHlsaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uYWNvcmRpYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbn1cclxuXHJcbi5mYS1maWx0ZXIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn0iLCIuZmlsdGVycyB7XG4gIHdpZHRoOiAyODZweDtcbn1cblxuLnctMThyZW0ge1xuICB3aWR0aDogMThyZW07XG59XG5cbi5maWx0ZXJzLXN0eWxpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMjk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmFjb3JkaWFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDI5O1xufVxuXG4uZmEtZmlsdGVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iLCIkZ3JlZW4tY29sb3I6ICM2ODlmMzg7XHJcbiR3aGl0ZS1jb2xvcjogd2hpdGU7XHJcbiRvcmFuZ2UtY29sb3I6ICNmZjdlMDA7XHJcbiRjaG9jbGF0ZS1jb2xvcjogIzM4MjYxMDtcclxuJGxpZ2h0LWdyZXk6ICM4MDgwODAyOTsiXX0= */";
    /***/
  },

  /***/
  "./src/app/views/user-views/products/products.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/user-views/products/products.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppViewsUserViewsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_components_topbar_topbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/shared/components/topbar/topbar.service */
    "./src/app/shared/shared/components/topbar/topbar.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(topBarService, router) {
        _classCallCheck(this, ProductsComponent);

        this.topBarService = topBarService;
        this.router = router;
        this.isCollapsed = true;
        this.products = [];
        this.products = this.topBarService.products;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.topBarService.setCartCount(this.products);
        }
      }, {
        key: "incrementProductCount",
        value: function incrementProductCount(productDetails, index) {
          this.products[index].productCount = this.products[index].productCount + 1;
          this.topBarService.setCartCount(this.products);
        }
      }, {
        key: "decrementProductCount",
        value: function decrementProductCount(productDetails, index) {
          this.products[index].productCount = this.products[index].productCount - 1;
          this.topBarService.setCartCount(this.products);
        }
      }, {
        key: "navigateToProductDetailedView",
        value: function navigateToProductDetailedView(event) {
          this.router.navigate(['products', event.id]);
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _shared_shared_components_topbar_topbar_service__WEBPACK_IMPORTED_MODULE_1__["TopbarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/user-views/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/views/user-views/products/products.component.scss")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/views/user-views/products/products.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/views/user-views/products/products.module.ts ***!
    \**************************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppViewsUserViewsProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/views/user-views/products/products-routing.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/views/user-views/products/products.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ProductsModule);
    /***/
  }
}]);
//# sourceMappingURL=views-user-views-products-products-module-es5.js.map