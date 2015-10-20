var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

/* GET users listing. */
router.post('/', function POSTatEmailRoot(req, res, next) {

	function HTMLRender(callback) {
		res.render('email/html', function afterRenderHTML(err, html) {
			if (err) {
				console.log('error at res.render:', err);
				return;
			}
			callback(html);
		});
	}
	function plaintextRender(callback) {
		res.render('email/plaintext', function afterRenderPlaintext(err, html) {
			if (err) {
				console.log('error at res.render:', err);
				return;
			}
			callback(html);
		});
	}


	// sending mail following nodemailer tutorial at http://nodemailer.com/
	function sendMail(emails) {
		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'yourgmailaddress@gmail.com',
				pass: 'yourpassword'
			}
		});

		transporter.sendMail({
			from: 'i18n test app', // sender address
			to: req.body.email, // list of receivers
			subject: 'Hello ✔', // Subject line
			text: emails[1][0], // plaintext body
			html: emails[0][0] // html body
		}, function afterSendmail(error, info) {
			if (error) {
				console.log('error from nodemailer:',error)
				res.send('message NOT sent');
			} else {
				console.log('Message sent: ' + info.response);
				res.send('message sent');
			}
		});
	}

	// series function taken from http://book.mixu.net/node/ch7.html
	function series(callbacks, last) {
		var results = [];

		function next() {
			var callback = callbacks.shift();
			if (callback) {
				callback(function() {
					results.push(Array.prototype.slice.call(arguments));
					next();
				});
			} else {
				last(results);
			}
		}
		next();
	}
	series([
		function(next) { HTMLRender(next); },
		function(next) { plaintextRender(next); }
	], sendMail);

});

module.exports = router;
