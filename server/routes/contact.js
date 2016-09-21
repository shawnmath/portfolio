var express = require("express"),
    router = express.Router(),
    nodemailer = require("nodemailer"),
    config = require("../config");


router.post("/contact", function(req, res){
	var mailOpts,
		smtpConfig,
		smtpTrans;

	smtpConfig = {
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: config.gmail.user,
			pass: config.gmail.pw
		}
	};

	smtpTrans = nodemailer.createTransport(smtpConfig);

	mailOpts = {
		from: req.body.email,
		to: "shawn.mathew@gmail.com",
		replyTo: req.body.email,
		subject: "Portfolio Contact Form",		
		text: "From: " + req.body.name + "\n" + "Email: " + req.body.email + "\n" + req.body.message
	};

	smtpTrans.sendMail(mailOpts, function(err, response){
		console.log(mailOpts);
		if(err){
			console.log(err);
			res.json({
				status: "error",
				message: "Something went wrong, please try again - " + err
			});
		} else {
			res.json({
				status: "success",
				message: "Your message was sent and I will reply to you soon!"
			});
		}
	});


});


module.exports = router;  
