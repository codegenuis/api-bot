var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db =  mongojs('mongodb://combos:12%4034@ds237989.mlab.com:37989/jamb_combos', ['combos'])

// Get Tasks
router.get('/courses', function(req, res, next){
	db.tasks.find(function(err,combos){
		if(err){
			res.send(err);  
		}
		res.json(combos);
	}); 
});

//Get Single Tasks
router.get('/course/:course_name', function(req, res, next){
	db.tasks.findOne({course_name: req.params.course_name},function(err,combo){
		if(err){
			res.send(err);
		}
		res.json(combo);
	}); 
});

module.exports = router;