var express = require('express');
const validate = require('express-validation');
const {formatResponse} = require('../../utlis/helper');
const axios = require('axios');
axios.defaults.headers.post['api-key'] =
  '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';
axios.defaults.headers.get['api-key'] =
  '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'; //TO_DO: get this from production.json // for POST requests

var router = express.Router();

// API VALIDATIONS
const {authValidation, sendInBlueValidation} = require('../../validations');

//CONTROLLERS
const {authController, sendInBlueController} = require('../../controllers');

const {decideUserRole} = require('../../middlewares/auth');

// add n number of middlewares // can be checked for authentication // lot more abilities
const middleware = [decideUserRole];
router.post('/auth/registerUser', validate(authValidation.registerUser), authController.registerUser);

router.post('/auth/login', validate(authValidation.loginUser), ...middleware, authController.loginUser);

//Send In Blue Requests

router.post(
  '/sendinblue/create_mail_list',
  validate(sendInBlueValidation.createMailerList),
  sendInBlueController.createMailerList
);

router.get('/sendinblue/get_all_list', sendInBlueController.getAllList);

module.exports = router;
