var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var blogSchema = new mongoose.Schema({
      'title': { type: String },
      'content': String,
      'created_at': {type: Date, default: Date.now}
  });
var Blog=mongoose.model('Blog', blogSchema);

Blog.schema.path('title').validate(function (value) {
  return value.length<=255;
}, 'Title Too long');

module.exports = Blog;