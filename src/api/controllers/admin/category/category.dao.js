var CategoryModel = require('./category.model');
var UserModal = require('./../../auth/user/user.model');
var ROLE_IDS = require('./../../../common/services/app.properties').ROLE_IDS;
var Utils = require('./../../../common/services/utils')

exports.createCategory =  (req, res, next) => {
    const payload = req.body;
    const authToken = req.get('Authorization');
    UserModal.find({authToken: authToken, "role.role_id": ROLE_IDS.ADMIN}, (userError, userList) => {
        if (userError) {
            return res.send(Utils.sendResponse(500, null, ['Unable to fetch Users List... Please Try again'], 'Unable to fetch Users List... Please Try again'));
        }
        if (userList.length <= 0) {
            return res.send(Utils.sendResponse(302, null, ['No user exist ... Please try with valid user'], 'No user exist ... Please try with valid user'));
        }
        delete userList[0].password;
        if (payload._id) {
            updateCategory(req, res, next, userList[0]);
        } else {
            var category = new CategoryModel(payload);
            category.createdBy = userList[0];
            category.updatedBy = userList[0];
            category.save((saveError, saveResult) => {
                if (saveError) {
                    if (saveError.errors.id) {
                        return res.send(Utils.sendResponse(500, null, ['Category ID already exist'], 'Category ID already exist'));
                    }
                    return res.send(Utils.sendResponse(500, null, ['Unable to save data... Please Try again'], 'Unable to save data... Please Try again'));
                }
                return res.send(Utils.sendResponse(200, saveResult, [], 'Category Created Successfully ...'));
            })
        }
    }) 
}

/**
 * Update Ctegory by _id and Category_id
 */
function updateCategory(req, res, next, user) {
    const payload = req.body;
    CategoryModel.find({_id: payload._id, id: payload.id}, (categoryError, categoryList) => {
        if (categoryError) {
            return res.send(Utils.sendResponse(500, null, ['Unable to fetch Categorys list'], 'Unable to fetch Categorys list'));
        }
        if (categoryList.length <= 0) {
            return res.send(Utils.sendResponse(302, null, ['Category Does not exist'], 'Category Does not exist'));
        }
        categoryList[0] = Object.assign(categoryList[0], payload);
        categoryList[0].updatedDate = new Date().getMilliseconds();
        categoryList[0].updatedBy = user;
        CategoryModel.update({_id: payload._id}, payload, (updateError, updateSuccess) => {
            if (updateError) {
                return res.send(Utils.sendResponse(500, null, ['Something went wrong... unable to Update Category'], 'Something went wrong... unable to Update Category'));
            }
            if (updateSuccess.ok === 1) {
                return res.send(Utils.sendResponse(200, categoryList[0], [], 'Updated category Successfully'));
            } else {
                return res.send(Utils.sendResponse(500, null, ['Unable to Update Category'], 'Unable to Update Category'));
            }
        })
    })
}

/**
 * Get all Categories based on active status true or false as query params
 */

exports.getAllCategories = (req, res, next) => {
    const authToken = req.get('Authorization');
    UserModal.find({authToken: authToken, "role.role_id": ROLE_IDS.ADMIN}, (userError, userList) => {
        if (userError) {
            return res.send(Utils.sendResponse(500, null, ['Unable to fetch Users List... Please Try again'], 'Unable to fetch Users List... Please Try again'));
        }
        if (userList.length <= 0) {
            return res.send(Utils.sendResponse(302, null, ['No user exist ... Please try with valid user'], 'No user exist ... Please try with valid user'));
        }
        let obj = {};
        if (req.query) {
            obj = Object.assign(obj, req.query);
        }
        CategoryModel.find(obj, (categoryError, categoryList) => {
            if (categoryError) {
                return res.send(Utils.sendResponse(500, null, ['Something went wrong... unable to fetch Categories'], 'Something went wrong... unable to fetch Categories'));
            }
            return res.send(Utils.sendResponse(200, categoryList, [], 'Categories fectched Successfully'));
        })
    }) 
}