const AWS = require('aws-sdk');
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  const emailParams = {
    Source: 'taesuzuki@yahoo.com',
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ['taesuzuki@yahoo.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from taesuzuki.com',
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

'use strict';

module.exports.taeStaticMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};