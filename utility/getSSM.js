//import AWS from 'aws-sdk';
const AWS = require('aws-sdk')

const ssmClient = new AWS.SSM({
  apiVersion: '2014-11-06',
  region: 'us-east-1'
});

const getSSM = new Promise((resolve, reject) => {
  ssmClient.getParameter(
    {
      Name: `/Giphy-key`,
      WithDecryption: true
    }, (err, data) => {
      //console.log("err",err)
      if (data?.Parameter) {
        resolve( data.Parameter.Value);
      }
    }
  );

})
// .then((secret) => {
//   console.log("secret", secret )
// })

module.exports = getSSM;