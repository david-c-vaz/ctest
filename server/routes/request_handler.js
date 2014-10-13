var express=require('express');
var app_controller = require('./../app/controllers/pages');
var router=express.Router();
router.route('/').get(app_controller.home);

exports.router=router
