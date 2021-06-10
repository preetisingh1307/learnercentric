var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

const sendGridEmail = require('../service/Mail');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Learner Centric' });
});
router.get('/about', function (req, res, next) {
	res.render('about', { title: 'Learner Centric' });
});
router.get('/contact', function (req, res, next) {
	res.render('contact', { title: 'Learner Centric' });
});
router.get('/subjects', function (req, res, next) {
	res.render('subjects', { title: 'Learner Centric' });
});

router.post('/contct', function (req, res, next) {
	try {
		console.log('conatct route called');

		const form = new formidable.IncomingForm();
		form.parse(req, async function (err, fields) {
			const { name, email, subject, number, message } = fields;
			console.log(name, email, subject, number, message);

			if (err) {
				console.log(err);
			} else {
				let result = await sendGridEmail({
					name: name,
					email: email,
					number: number,
					subject: subject,
					message: message,
				});
				if (result.status) {
					res.status(200).send('OK');
				} else {
					res.status(500).send('Failed');
				}
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500);
	}
});
module.exports = router;
