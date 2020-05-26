// const { createUserInMongo, loginUserMongo } = require("../db/user_collection");
const {formatResponse} = require('../utlis/helper');
const {setMailerList} = require('../Integrations/send-in-blue');
const createMailerList = async (req, res, next) => {
  try {
    var {listName, folderId, fileUrl} = req.body;
    var result = await setMailerList({listName, folderId, fileUrl});
    console.log('createMailerList -> result', result);
    //TO_DO: Need to avoid Stringfy and parsing.
    return res.status(200).json(formatResponse(200, null, JSON.stringify(result.data), null));
  } catch (err) {
    console.log('createMailerList -> err', err);
    return res.status(400).json(formatResponse(400, err));
  }
};

module.exports = {
  createMailerList
};
