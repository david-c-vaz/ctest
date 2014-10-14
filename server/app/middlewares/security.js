var express = require('express');

exports.authenticator= function(req,res,next){  
  	if(req.cookies.userName){
  		next();	
  	}else{
  		res.redirect('/#/sign_in');
  		next('Not Authorised');	
  	}
}
