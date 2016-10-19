var express = require('express'),
    router = express.Router(),
    Work = require('../models/work');

// GET - all work items
router.get('/', function(req, res){
	Work.find({}, function(err, allWork){
		if(err){
			console.log(err);
		} else {
			res.json(allWork);			
		}		
	});
});

// POST - add new work item
router.post('/', function(req, res){
	Work.create({
		title: req.body.title,
		summary1: req.body.summary1,
		summary2: req.body.summary2,
		summary3: req.body.summary3,
		image: req.body.image,
		linkToSite: req.body.linkToSite,
		linkToCode: req.body.linkToCode
	}, function(err, work){
		if(err){
			console.log(err);	
		} else {
			res.json(work);
		}		
	});
});

// GET - individual work item
router.get('/:title', function(req, res){
	console.log(req.params.title);
	Work.findOne({title: req.params.title}, function(err, work){
		if(err){
			console.log(err);
		} else {
			res.json(work);
		}
	});
});

// UPDATE - edit a work item
router.put('/:title', function(req, res){
	console.log('title:' + req.params.title);
	console.log('bodyTitle:' + req.body.title);
	Work.findOneAndUpdate({ title: req.params.title }, {
		$set : {
			title: req.body.title,
			summary1: req.body.summary1,
			summary2: req.body.summary2,
			summary3: req.body.summary3,
			image: req.body.image,
			linkToSite: req.body.linkToSite,
			linkToCode: req.body.linkToCode	
		}		
	}, {$new: true}, function(err, work){
		if (err) throw err;
		res.json(work);
	});
});	

// DELETE - delete a work item 
router.delete('/:title', function(req, res){
	Work.findOneAndRemove({ title: req.params.title }, function(err, work){
		if (err) throw err;
		res.json(work);
	});
});


module.exports = router;