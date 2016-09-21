var express = require('express'),
    router = express.Router();

router.get('/', function(req, res){
	res.send({message: 'Dashboard'});
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }    
    res.redirect('/login');
};

module.exports = router;



