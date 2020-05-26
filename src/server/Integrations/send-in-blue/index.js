const axios = require('axios');
const setMailerList = async ({listName, folderId, fileUrl}) => {
  try {
    var data = {};
    data['newList'] = {listName, folderId};
    data['fileUrl'] = fileUrl;
    data['emailBlacklist'] = false; //TO_DO hard coded looose end
    data['updateExistingContacts'] = true;
    data['smsBlacklist'] = false;
    data['emptyContactsAttributes'] = false;
    const result = await axios.post(`https://api.sendinblue.com/v3/contacts/import`, data);
    return result.data;
  } catch (err) {
    console.log('setMailerList -> err', err);
    return err;
    //TO_DO handle
  }
};

module.exports = {
  setMailerList
};
