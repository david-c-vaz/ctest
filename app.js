var express = require('express');
var bodyParser = require('body-parser');
var session= require('express-session');
var cookieParser = require('cookie-parser');
var path= require('path');
var db= require('./server/db/database.js');
var request_handler=require('./server/routes/request_handler');
var security=require('./server/app/middlewares/security');

var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'jade');
app.use(cookieParser());
app.use('/authenticated/sign_out',security.authenticator);
app.use('/authenticated/users',security.authenticator);
app.use('/authenticated/blogs',security.authenticator);
app.use(session({secret:'dasfd7s6f8dsf8asdyf87sfd8sfg7dsf'}));
app.use( bodyParser.json());    
app.use( bodyParser.urlencoded());
app.use('/authenticated',request_handler.authenticated_router);
app.use('/',request_handler.router);

var server=app.listen(4000,function(){
  console.log('This application uses port %d', server.address().port)
  db.connect();
});