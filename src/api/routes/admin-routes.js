var express = require('express');
var adminRoutes = express.Router();
var CategoryDAO = require('../controllers/admin/category/category.dao');
var UserDAO = require('../controllers/auth/user/user.dao');
var ProductDAO= require('../controllers/admin/products/products.dao');


adminRoutes.post('/modify-category', CategoryDAO.createCategory);

adminRoutes.get('/get-categories', CategoryDAO.getAllCategories);

adminRoutes.get('/get-all-users/:id',UserDAO.getAllUsers);

adminRoutes.post('/create-product/:id', ProductDAO.createProduct);

adminRoutes.get('/get-all-products-by-status', ProductDAO.getAllProductsByAdmin);

adminRoutes.get('/get-product-by-id/:productID', ProductDAO.getProductDetailsByAdminByID);

exports.adminRoutes = adminRoutes;
