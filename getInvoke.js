
var AWS = require('aws-sdk');

// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
//AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
AWS.config.region = "us-east-1";

var lambda = new AWS.Lambda();
const input = require('./input.json');

var params = {
  FunctionName: 'getItems', /* required */
  Payload: JSON.stringify(input)

};
const cc = lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
