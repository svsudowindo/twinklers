var express = require('express');
var adminRoutes = express.Router();
var CategoryDAO = require('../controllers/admin/category/category.dao');
var UserDAO = require('../controllers/auth/user/user.dao');

adminRoutes.post('/reset-password', UserDAO.resetPassword);

adminRoutes.post('/update-profile', UserDAO.updateUserProfile);

adminRoutes.post('/modify-category', CategoryDAO.createCategory);

adminRoutes.get('/get-categories', CategoryDAO.getAllCategories);

exports.adminRoutes = adminRoutes;
