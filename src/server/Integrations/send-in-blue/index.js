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

module.exports = {
  setMailerList
};
