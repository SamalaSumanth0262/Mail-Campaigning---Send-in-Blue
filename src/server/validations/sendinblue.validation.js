const {commonValidations} = require('./common.validation');
module.exports = {
  //TO_DO: write validation for form - data
  createMailerList: {
    body: {
      listName: commonValidations.stringRequired,
      folderId: commonValidations.numberRequired,
      fileUrl: commonValidations.stringRequired
    }
  },
  createCampaign: {
    body: {
      campaign_name: commonValidations.stringRequired,
      email: commonValidations.emailRequired, ///already email validation i shandled in client side
      htmlContent: commonValidations.stringRequired,
      // listIds: commonValidations.ob, //TO_DO write validation { label: '', value: ''}
      name: commonValidations.stringRequired,
      replyTo: commonValidations.emailRequired,
      scheduledAt: commonValidations.stringRequired, //TO_DO: Write regex for ISO time format
      subject: commonValidations.stringRequired
    }
  }
};
