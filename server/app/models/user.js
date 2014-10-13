var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var userSchema = new mongoose.Schema({
      'userName': { type: String },
      'firstName': { type: String },
      'lastName': { type: String },
      'password': {type: String}
  });

var User=mongoose.model('User', userSchema);

module.exports =User 