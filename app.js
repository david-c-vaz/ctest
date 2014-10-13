var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var path= require('path');
var db= require('./server/db/database.js');
var request_handler=require('./server/routes/request_handler');

var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'jade');
app.use( bodyParser.json() );    
app.use( bodyParser.urlencoded() );
app.use( cookieParser('adsff6t7dsf5tdg7gf67datf6s7dfastygfas7d96ftas7gds7a') );    
app.use( session());
app.use('/',request_handler.router);

var server=app.listen(4000,function(){
  console.log('This application uses port %d', server.address().port)
  db.connect();
});