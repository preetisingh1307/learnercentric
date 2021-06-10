const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
var fs = require('fs');
dotenv.config();

const SENDGRID_API_KEY =
	'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';

sgMail.setApiKey(SENDGRID_API_KEY);

const SENDER_EMAIL_ADDRESS = 'kbasha968@gmail.com';

const sendGridEmail = (data) => {
	return new Promise(async (resolve, reject) => {
		const msg = {
			from: `${SENDER_EMAIL_ADDRESS}`, // Change to your verified sender
			to: `${data.email}`, // Change to your recipient
			subject: `${data.subject}`,
			text: `${data.name} with ${data.number} sent a message : ${data.message}`,
			html: `${data.name} with ${data.number} sent a message : ${data.message}`,
		};

		await sgMail
			.send(msg)
			.then(() => {
				resolve({ status: 200 });
			})
			.catch((error) => {
				reject(error);
			});
	});
};

module.exports = sendGridEmail;
