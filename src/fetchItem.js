'use strict';

const AWS = require('aws-sdk');

const fetchItem = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  let item;

  try {
    const result = await dynamoDB
      .scan({
        TableName: 'ItemTableNew',
        key: { id },
      })
      .promise();
    item = result.Item;
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

module.exports = {
  handler: fetchItem,
};
