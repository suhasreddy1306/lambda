const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    await dynamo
          .put({
            TableName: event.tablename,
            Item: {
              EMP_ID: event.id,
              name: event.name,
              salary: event.salary
            }
          })
          .promise();
    body = `Put item done`;
  
    return body;
};
