// const { createUserInMongo, loginUserMongo } = require("../db/user_collection");
const {formatResponse} = require('../utlis/helper');
const {setMailerList, getAllMailerList, createMailCampaign, getCampaignsList} = require('../Integrations/send-in-blue');
const createMailerList = async (req, res, next) => {
  try {
    var {listName, folderId, fileUrl} = req.body;
    var result = await setMailerList({listName, folderId, fileUrl});
    //TO_DO: Need to avoid Stringfy and parsing.
    return res.status(200).json(formatResponse(200, null, JSON.stringify(result.data), null));
  } catch (err) {
    console.log('createMailerList -> err', err);
    return res.status(400).json(formatResponse(400, err));
  }
};

const getAllList = async (req, res, next) => {
  try {
    var result = await getAllMailerList();
    return res.status(200).json(formatResponse(200, null, result.data, null));
  } catch (err) {
    console.log('getAllList -> err', err);
    return res.status(400).json(formatResponse(400, err));
  }
};

const createCampaign = async (req, res, next) => {
  try {
    var result = await createMailCampaign(req.body);
    return res.status(200).json(formatResponse(200, null, result.data, null));
  } catch (err) {
    console.log('createCampaign -> err', err);
    return res.status(400).json(formatResponse(400, err, null, err.response.data));
  }
};

const getCampaigns = async (req, res, next) => {
  try {
    var result = await getCampaignsList();
    return res.status(200).json(formatResponse(200, null, result, null));
  } catch (err) {
    console.log('getAllList -> err', err);
    return res.status(400).json(formatResponse(400, err));
  }
};

module.exports = {
  createMailerList,
  getAllList,
  createCampaign,
  getCampaigns
};
