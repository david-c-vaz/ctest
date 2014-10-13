var mongoose = require('mongoose');

exports.connect=function(){	
	var db = mongoose.connection;
	db.on('error', console.error);
	mongoose.connect('mongodb://localhost:27017/test_blog_app');
	return db;
}