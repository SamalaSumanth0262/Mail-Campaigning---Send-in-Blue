var request = require('request');

var options = {
  method: 'POST',
  url: 'https://api.sendinblue.com/v3/contacts/import',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': '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'
  },
  body:
    '{"newList":{"listName":"test 2","folderId":1},"emailBlacklist":false,"smsBlacklist":false,"updateExistingContacts":true,"emptyContactsAttributes":false,"fileUrl":"https://twilio-bucket.s3.ap-south-1.amazonaws.com/sumanth-email.csv"}'
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
