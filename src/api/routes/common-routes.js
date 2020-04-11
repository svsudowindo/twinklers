var express = require('express');
var commonRoutes = express.Router();
var CategoryDAO = require('../controllers/admin/category/category.dao');
var UserDAO = require('../controllers/auth/user/user.dao');
var ProductDAO= require('../controllers/admin/products/products.dao');

commonRoutes.post('/reset-password', UserDAO.resetPassword);
commonRoutes.post('/update-profile', UserDAO.updateUserProfile);
commonRoutes.get('/get-user-by-id/:id', UserDAO.getUserByUserId);

exports.commonRoutes = commonRoutes;
