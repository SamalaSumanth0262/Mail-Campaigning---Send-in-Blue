// const { createUserInMongo, loginUserMongo } = require("../db/user_collection");
const {formatResponse} = require('../utlis/helper');
const {setMailerList} = require('../Integrations/send-in-blue');
const createMailerList = async (req, res, next) => {
  try {
    var {listName, folderId, fileUrl} = req.body;
    var result = await setMailerList({listName, folderId, fileUrl});
    console.log('createMailerList -> result', result.data);

    // return res.status(200).json(formatResponse(200, null, result, null));
    res.status(200).json({success: true});
  } catch (err) {
    console.log('createMailerList -> err', err);
    return res.status(400).json(formatResponse(400, err));
  }
};

module.exports = {
  createMailerList
};
