var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

// User Authentication
router.get("/user-status", function(req, res){
	if( !req.isAuthenticated() ){
		return res.status(200).json({
			status: false
		});
	}
	res.status(200).json({
		status: true
	});
});

// Register New User
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			return res.status(500).json({
				err: err
			});
		}
		passport.authenticate("local")(req, res, function(){
			return res.status(200).json({
				status: "Registration Successful!"
			});
		});
	});
});

// Login
router.post("/login", function(req, res, next){
	passport.authenticate("local", function(err, user, info){
		if(err){
			return next(err);
		}

		if(!user){
			return res.status(401).json({
				err: info
			});
		}

		req.login(user, function(err){
			if(err){
				return res.status(500).json({
					err: "Could not log in user"
				});
			}

			res.status(200).json({
				status: "Login Successful!"
			});
		});

	})(req, res, next);
});

// Logout
router.get("/logout", function(req, res){
	req.logout()
	res.status(200).json({
		status: "Logged Out!"
	});
});

module.exports = router;