const axios = require('axios');
const setMailerList = async ({listName, folderId, fileUrl}) => {
  return new Promise(async (resolve, reject) => {
    try {
      var result = await axios.post(`https://api.sendinblue.com/v3/contacts/import`, {
        newList: {listName: listName, folderId: folderId},
        emailBlacklist: false,
        smsBlacklist: false,
        updateExistingContacts: true,
        emptyContactsAttributes: false,
        fileUrl: fileUrl
      });
      return resolve(result);
    } catch (err) {
      console.log('setMailerList -> err', err);
      return reject(err);
      // Loose End
    }
  });
};

const getAllMailerList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      //TO_DO limit and offset should not be hardcoded
      var result = await axios.get('https://api.sendinblue.com/v3/contacts/lists?limit=30&offset=0');
      return resolve(result);
    } catch (err) {
      console.log('setMailerList -> err', err);
      return reject(err);
      // Loose End
    }
  });
};

module.exports = {
  setMailerList,
  getAllMailerList
};
