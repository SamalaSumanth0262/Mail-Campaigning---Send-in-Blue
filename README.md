#### This project is made from a boiler plate referred to `https://yeoman.io/generators/`

#### It also uses formik components from Formik Library referred to `https://github.com/SamalaSumanth0262/Formik-Components` 


:smile: Demo: 


# Running local server
###
#### node version === 10.16.3
#### Docker Service to push the image to ECR
#### for safer side after cloning remove node_modules.
#### Run `npm install` or `yarn install`
#### `npm run dev` you should see the webpage running on `localhost:1111/signin`
#### development json should be there `config/development.json`

## Important 
#### JSON structure should be exactly like below

```{
  "app": {
    "port": 1111
  },
  "mongo_db_url": "",
  "aws": {
    "cognito": {
      "userPoolId": "",
      "poolRegion": "",
      "clientId": "",
      "domain": ""
    },
    "iam": {
      "secretAccessKey": "",
      "accessKeyId": "",
      "region": ""
    },
    "ses_iam": {
      "secretAccessKey": "",
      "accessKeyId": "",
      "region": ""
    },
    "s3": {
      "bucketName": ""
    },
    "ses": {
      "fromAddress": "",
      "noReplyAddress": ""
    }
  },
  "new_relic_key": "",
  "twilio_account_sid": "",
  "twilio_api_key": "",
  "twilio_api_secret": ""
}```


##### PR's, Improvements are welcome
