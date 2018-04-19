var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db =  mongojs('mongodb://charles:5020@ds131258.mlab.com:31258/tasklist_charles', ['tasks'])

// Get Tasks
router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err,tasks){
		if(err){
			res.send(err);  
		}
		res.json(tasks);
	}); 
});

//Get Single Tasks
router.get('/task', function(req, res, next){
	db.tasks.findOne({_id: mongojs.ObjectId(req.query.id)},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	}); 
});


//Save Tasks
router.post('/task', function(req,res,next){
	var task = req.body;
	if(!task.title || (task.isDone + '')){
			res.status(404);
			res.json({'error':'Bad Data'});
	}
	else{
		db.tasks.save(function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
	}
});

//Delete Tasks
router.delete('/task/:id', function(req, res, next){
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	}); 
});

//Delete Tasks
router.put('/task/:id', function(req, res, next){

	var task = req.body;
	var updTask = {};
	if(task.isDone)
		updTask.isDone = task.isDone;
	if(task.title)
		updTask.title = task.title;
	if(!updTask){
		res.status(400);
		res.json({'Error':'Bad data'});
	}
	else{
		db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask,{},function(err,task){
		if(err){
			res.send(err);
		}
		res.json(task);
	}); 
	}
	
});

module.exports = router;