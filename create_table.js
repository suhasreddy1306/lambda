var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
//AWS.config.accessKeyId = "AKIA5WAEJ2C3QU37WJTC";
//AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Create a Table

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'EMP_ID',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'EMP_ID',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'EMPLOYEE',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});