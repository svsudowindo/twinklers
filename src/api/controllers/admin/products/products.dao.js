var CategoryModel = require('../category/category.model');
var UserModal = require('./../../auth/user/user.model');
var ROLE_IDS = require('./../../../common/services/app.properties').ROLE_IDS;
var Utils = require('./../../../common/services/utils');
var ProductsModel = require('./products.model');

/** 
 * Create Product By using userID , authorization and admin Role 
 */
exports.createProduct = (req, res, next) => {
    const id = req.params.id;
    const authToken = req.get('Authorization');
    const payload = req.body;
    console.log(id);
    console.log(authToken);
    // check wether user is valid admin or not
    UserModal.find({_id: id, authToken: authToken, "role.role_id": ROLE_IDS.ADMIN}, (userError, userResult) => {
        if (userError) {
            return res.send(Utils.sendResponse(500, null, ['Unable to fetch Users List... Please Try again'], 'Unable to fetch Users List... Please Try again'));
        }
        if (userResult.length <= 0) {
            return res.send(Utils.sendResponse(302, null, ['User Doesnt exist ... Please try with admin'], 'User Doesnt exist ... Please try with admin'));
        }
        // check for the category ID
        console.log(payload.categoryID);
        if (payload.categoryID) {
            CategoryModel.find({id: payload.categoryID}, (categoryError, categorySuccess) => {
                if (categoryError) {
                    return res.send(Utils.sendResponse(500, null, ['Unable to fetch Categories... Please Try again'], 'Unable to fetch Categories ... Please try again'));
                }
                if (categorySuccess.length <= 0) {
                    return res.send(Utils.sendResponse(302, null, ['Category Doesnt exist ... Please try with admin'], 'Category Doesnt exist ... Please try with admin'));
                }
                productIntoDB(req, res, next);
            })
        } else {
            productIntoDB(req, res, next);
        }
    })
}

function productIntoDB(req, res, next) {
    const payload = req.body;
    if (payload.mrp < payload.discountPrice) {
        return res.send(Utils.sendResponse(400, null, ['Bad Request... MRP should always be greater than discount Price'], 'Bad Request... MRP should always be greater than discount Price'));
    }
    payload.cost = payload.mrp - payload.discountPrice;
    var product = new ProductsModel(payload);
    product.save((productError, productSave) => {
        if (productError) {
            if (productError.errors.id) {
                return res.send(Utils.sendResponse(500, null, [productError.errors.id.message], 'Product ID should be Unique'));
              } else {
                return res.send(Utils.sendResponse(500, null, ['Unable to Create Product... Please Try again'], 'Unable to Create Product ... Please try again'));
              }
        }
        if (productSave.length <= 0) {
            return res.send(Utils.sendResponse(400, null, ['Bad Request... Please Try again'], 'Bad Request... Please try again'));
        }
        return res.send(Utils.sendResponse(200, productSave, [], 'Product created Successfully'));
    })
}

/**
 * Get Products List either by admin or by users using status as query params
 */
exports.getAllProducts = (req, res, next) => {
    let obj = {};
    if (req.query) {
        obj = Object.assign(obj, req.query);
    }
    ProductsModel.find(obj, (productsListError, productsList) => {
        if (productsListError) {
            return res.send(Utils.sendResponse(500, null, ['Unable to fetch products list ... Please try again ..'], 'Unable to fetch products list ... Please try again ..'));
        }
        return res.send(Utils.sendResponse(500, productsList, [], 'Products list fetched successfully')); 
    })
}