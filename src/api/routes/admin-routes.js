var express = require('express');
var adminRoutes = express.Router();
var UserDAO = require('../controllers/auth/user/user.dao');

adminRoutes.post('/reset-password', UserDAO.resetPassword);

adminRoutes.post('/update-profile', UserDAO.updateUserProfile);

exports.adminRoutes = adminRoutes;
