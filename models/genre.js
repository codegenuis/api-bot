var mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost:27017/restapi',{useMongoClient: true,});

//Users Schema
var userSchema  =  new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//this makes the users schema available to everyone
var User = module.exports = mongoose.model('User',userSchema);

//function to get users
module.exports.getUsers = function(callback,limit){
    User.find({}, null, {limit: limit}, callback);

}

//get user
module.exports.getUserById = function(id,callback){
	User.findById(id, callback);
}

//add user
module.exports.addUser= function(user,callback){
	User.create(user, callback);
}
