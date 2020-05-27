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

const createMailCampaign = async (body) => {
  return new Promise(async (resolve, reject) => {
    var {campaign_name, email, htmlContent, listIds, name, replyTo, scheduledAt, subject} = body;
    try {
      var result = await axios.post('https://api.sendinblue.com/v3/emailCampaigns', {
        sender: {
          name: name,
          email: email
        },
        recipients: {
          listIds: [listIds.value] //TO_DO can select mutliple campaign
        },
        inlineImageActivation: false,
        sendAtBestTime: false, //Send in blue recommendation
        abTesting: false,
        ipWarmupEnable: false, //Priming the email ID
        name: campaign_name,
        htmlContent: htmlContent,
        scheduledAt: new Date(scheduledAt).toISOString(), //ISO format to get more accurate results
        subject: subject,
        replyTo: replyTo
      });
      return resolve(result);
    } catch (err) {
      console.log('setMailerList -> err', err);
      return reject(err);
      // Loose End
    }
  });
};

const getCampaignsList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      //TO_DO limit and offset should not be hardcoded
      var result = await axios.get('https://api.sendinblue.com/v3/emailCampaigns?limit=500&offset=0');
      return resolve(result.data);
    } catch (err) {
      console.log('getCampainsList -> err', err);
      return reject(err);
      // Loose End
    }
  });
};
module.exports = {
  setMailerList,
  getAllMailerList,
  createMailCampaign,
  getCampaignsList
};
