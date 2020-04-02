var express = require('express');
var adminRoutes = express.Router();
var UserDAO = require('../controllers/auth/user/user.dao');

adminRoutes.post('/reset-password', UserDAO.resetPassword);

exports.adminRoutes = adminRoutes;
