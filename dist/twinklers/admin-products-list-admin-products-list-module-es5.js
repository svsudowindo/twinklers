function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-products-list-admin-products-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-products-list/admin-products-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-products-list/admin-products-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAdminViewsAdminProductsListAdminProductsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container main\">\r\n  <div class=\"row m-b-10 action-buttons\">\r\n    <div class=\"col-sm-6 m-t-10\">\r\n      <form style=\"width: 170px\">\r\n        <div class=\"form-group form-inline\">\r\n          <input class=\"form-control ml-2\" placeholder=\"Search By Name or ID\" type=\"text\" />\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary m-t-10\" [routerLink]=\"['create-product']\">Create Product</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">Id</th>\r\n          <th scope=\"col\">Product Name</th>\r\n          <th scope=\"col\">Category</th>\r\n          <th scope=\"col\">Updated By</th>\r\n          <th scope=\"col\">Updated On</th>\r\n          <th scope=\"col\">Delete</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let product of products as i\">\r\n          <th scope=\"row\">{{product.id}}</th>\r\n          <td>{{product.productName}}</td>\r\n          <td>{{product.category}}</td>\r\n          <td>{{product.updatedBy}}</td>\r\n          <td>{{product.updatedOn}}</td>\r\n          <td><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"d-flex justify-content-end  \">\r\n    <select class=\"custom-select  \" style=\"width: auto\" [(ngModel)]=\"pageSize\">\r\n      <option [ngValue]=\"2\">2 items per page</option>\r\n      <option [ngValue]=\"4\">4 items per page</option>\r\n      <option [ngValue]=\"6\">6 items per page</option>\r\n    </select>\r\n    <ngb-pagination [collectionSize]=\"70\" class=\"m-l-16\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/views/admin-views/admin-products-list/admin-products-list-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/views/admin-views/admin-products-list/admin-products-list-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AdminProductsListRoutingModule */

  /***/
  function srcAppViewsAdminViewsAdminProductsListAdminProductsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProductsListRoutingModule", function () {
      return AdminProductsListRoutingModule;
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
    /* harmony import */


    var _admin_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-products-list.component */
    "./src/app/views/admin-views/admin-products-list/admin-products-list.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: '',
        component: _admin_products_list_component__WEBPACK_IMPORTED_MODULE_3__["AdminProductsListComponent"]
      }, {
        path: 'create-product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admin-modify-product-admin-modify-product-module */
          "admin-modify-product-admin-modify-product-module").then(__webpack_require__.bind(null,
          /*! ./admin-modify-product/admin-modify-product.module */
          "./src/app/views/admin-views/admin-products-list/admin-modify-product/admin-modify-product.module.ts")).then(function (m) {
            return m.AdminModifyProductModule;
          });
        }
      }]
    }];

    var AdminProductsListRoutingModule = function AdminProductsListRoutingModule() {
      _classCallCheck(this, AdminProductsListRoutingModule);
    };

    AdminProductsListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminProductsListRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/admin-views/admin-products-list/admin-products-list.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/views/admin-views/admin-products-list/admin-products-list.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsAdminViewsAdminProductsListAdminProductsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXZpZXdzL2FkbWluLXByb2R1Y3RzLWxpc3QvYWRtaW4tcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/views/admin-views/admin-products-list/admin-products-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/views/admin-views/admin-products-list/admin-products-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdminProductsListComponent */

  /***/
  function srcAppViewsAdminViewsAdminProductsListAdminProductsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProductsListComponent", function () {
      return AdminProductsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminProductsListComponent =
    /*#__PURE__*/
    function () {
      function AdminProductsListComponent() {
        _classCallCheck(this, AdminProductsListComponent);

        this.products = [{
          id: '1',
          productName: 'chacobar',
          category: 'geneeral',
          updatedBy: 'balaji',
          updatedOn: '19/02/2020'
        }, {
          id: '2',
          productName: 'five star',
          category: 'birthday',
          updatedBy: 'balaji',
          updatedOn: '21/02/2020'
        }, {
          id: '3',
          productName: 'dairy milk',
          category: 'new year',
          updatedBy: 'balaji',
          updatedOn: '01/01/2020'
        }, {
          id: '4',
          productName: 'kit kat',
          category: 'geneeral',
          updatedBy: 'balaji',
          updatedOn: '12/02/2020'
        }, {
          id: '5',
          productName: 'Ferrero Rocher',
          category: 'event',
          updatedBy: 'balaji',
          updatedOn: '12/02/2020'
        }, {
          id: '6',
          productName: 'Lindt & Sprüngli',
          category: 'geneeral',
          updatedBy: 'balaji',
          updatedOn: '16/02/2020'
        }, {
          id: '7',
          productName: 'Ghirardelli',
          category: 'occasion',
          updatedBy: 'balaji',
          updatedOn: '11/01/2020'
        }, {
          id: '8',
          productName: 'Hersheys',
          category: 'geneeral',
          updatedBy: 'balaji',
          updatedOn: '12/02/2020'
        }, {
          id: '9',
          productName: 'Toblerone',
          category: 'birthday',
          updatedBy: 'balaji',
          updatedOn: '11/02/2020'
        }, {
          id: '10',
          productName: 'Guylian',
          category: 'occasion',
          updatedBy: 'balaji',
          updatedOn: '09/01/2020'
        }, {
          id: '11',
          productName: 'Patchi',
          category: 'geneeral',
          updatedBy: 'balaji',
          updatedOn: '12/01/2020'
        }, {
          id: '12',
          productName: 'Godiva',
          category: 'occasion ',
          updatedBy: 'balaji',
          updatedOn: '14/01/2020'
        }, {
          id: '13',
          productName: 'Nestlé',
          category: 'valentine  ',
          updatedBy: 'balaji',
          updatedOn: '14/02/2020'
        }];
      }

      _createClass(AdminProductsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminProductsListComponent;
    }();

    AdminProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-products-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-products-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin-views/admin-products-list/admin-products-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-products-list.component.scss */
      "./src/app/views/admin-views/admin-products-list/admin-products-list.component.scss")).default]
    })], AdminProductsListComponent);
    /***/
  },

  /***/
  "./src/app/views/admin-views/admin-products-list/admin-products-list.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/views/admin-views/admin-products-list/admin-products-list.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AdminProductsListModule */

  /***/
  function srcAppViewsAdminViewsAdminProductsListAdminProductsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProductsListModule", function () {
      return AdminProductsListModule;
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


    var _admin_products_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-products-list-routing.module */
    "./src/app/views/admin-views/admin-products-list/admin-products-list-routing.module.ts");
    /* harmony import */


    var _admin_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-products-list.component */
    "./src/app/views/admin-views/admin-products-list/admin-products-list.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AdminProductsListModule = function AdminProductsListModule() {
      _classCallCheck(this, AdminProductsListModule);
    };

    AdminProductsListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_products_list_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductsListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_products_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminProductsListRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AdminProductsListModule);
    /***/
  }
}]);
//# sourceMappingURL=admin-products-list-admin-products-list-module-es5.js.map