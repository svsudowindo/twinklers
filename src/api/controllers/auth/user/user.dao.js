var User = require('./user.model');
var Utils = require('../../../common/services/utils')
var emailService = require('../../../common/email.config/email.config');
var ROLES = require('../../../common/services/app.properties').ROLES;
var RolesModal = require('../roles/roles.model');
var GenderModal = require('../gender/gender.model');

exports.saveUser = (req, res, next) => {
  let payload = req.body;
  var user = new User(payload);
  RolesModal.find({role_id: payload.role.role_id}, (rolesError, rolesResult) => {
    if (rolesError) {
      return res.send(Utils.sendResponse(500, null, ['Unable to fetch roles'], 'Unable to fetch roles'));
    }
    if (rolesResult.length <= 0) {
      return res.send(Utils.sendResponse(404, null, ['No Role exist with specified role id'], 'No Role exist with specified role id'));
    }
    GenderModal.find({gender_id: payload.gender.gender_id}, (genderError, genderResult) => {
      if (genderError) {
        return res.send(Utils.sendResponse(500, null, ['Unable to fetch gender'], 'Unable to fetch gender'));
      }
      if (genderResult.length <= 0) {
        return res.send(Utils.sendResponse(404, null, ['No Gender exist with specified gender id'], 'No Gender exist with specified role id'));
      }
      user.role = rolesResult[0];
      user.gender = genderResult[0];
      user.userName = payload.firstName + ' ' + payload.lastName;
      user.password = Utils.generatePassword(8);
      user.authToken = Utils.generatePassword(36);
      user.save((userSaveError, savedUser) => {
        if (userSaveError) {
          if (userSaveError.errors.email) {
            return res.send(Utils.sendResponse(500, null, [userSaveError.errors.email.message], userSaveError.errors.email.message));
          } else {
            return res.send(Utils.sendResponse(500, null, ['Unable to  create User. Please try again'], 'Unable to fetch user. Please try again'));
          }
        }
        if (savedUser.length >= 0) {
          return res.send(Utils.sendResponse(400, null, ['Unauthorized user'], 'Unauthorized user'));
        }
        let emailBody = {
          email: user.email,
          password: user.password
        };
        // emailService.sendMail(emailBody, 'Registration with Twinklers', 'You have registered with Twinklers', 'Please Use following credentials to login', true)
        return res.send(Utils.sendResponse(200, savedUser, [], 'User Saved Successfully'));
      })
    })
    
  })
    
}