var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
//initializing the middleware
app.use(bodyParser.json());
User = require('./models/genre');
//Connect too Mongoose
mongoose.connection.openUri('mongodb://localhost:27017/registration');
 var db = mongoose.connection;

 
 //handling a get request
 app.get('/', function(req, res){
 	res.send('Please use this on gitbash /api/restapi');
 });
 app.get('/api/users',function(req, res){
 	User.getUsers(function(err, users){
 		res.json(users);
 		//console.log(users);
 	});
 });

 app.get('/api/users/:_id',function(req, res){
 	User.getUserById(req.params._id,function(err, user){
 		res.json(user);
 		//console.log(users);
 	});
 });
 app.get('/api/contact', function(req, res){
 	res.json(contact);
 })

 app.post('/api/users',function(req, res){
 	var user = req.body;
 	User.addUser(user,function(err, user){
 		res.json(user);
 		console.log(user);
 	});
 });

 
 app.listen(3000);
 console.log('Running on port 3000....');