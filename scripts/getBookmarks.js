const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08', region: 'eu-west-2' });

AWS.config.setPromisesDependency(null);

module.exports = function getBookmarks(cb) {
    return ddb.scan({ TableName: `bookmarks` }).promise()
}
