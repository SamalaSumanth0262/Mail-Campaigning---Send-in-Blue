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
router.post(
  '/sendinblue/create_campaign',
  validate(sendInBlueValidation.createCampaign),
  sendInBlueController.createCampaign
);

router.get('/sendinblue/get_campaigns', sendInBlueController.getCampaigns);

module.exports = router;
