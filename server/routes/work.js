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
router.get('/:id', function(req, res){
	Work.findOne({_id: req.params.id}, function(err, work){
		if(err){
			console.log(err);
		} else {
			res.json(work);
		}
	});
});

// UPDATE - edit a work item
router.put('/:id', function(req, res){
	Work.findByIdAndUpdate({ _id: req.params.id }, {
		title: req.body.title,
		summary1: req.body.summary1,
		summary2: req.body.summary2,
		summary3: req.body.summary3,
		image: req.body.image,
		linkToSite: req.body.linkToSite,
		linkToCode: req.body.linkToCode
	}, function(err, work){
		if (err) throw err;
		res.json(work);
	});
});	

// DELETE - delete a work item 
router.delete('/:id', function(req, res){
	Work.findByIdAndRemove({ _id: req.params.id }, function(err, work){
		if (err) throw err;
		res.json(work);
	});
});

module.exports = router;