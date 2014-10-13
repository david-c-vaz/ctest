var User=require('../models/user');
exports.createUser=function(req,res,next){
  var user=new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  });

  user.save(function(err, user) {
    if (err){
      return res.json(err.errors);
    }else{
      res.json(user);
    } 
  });
}

exports.showUser=function(req,res,next){
    return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        return res.json(user);
      }
    });
}


exports.updateUser=function(req,res,next){
  return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        user.userName= req.body.userName;
        user.firstName= req.body.firstName;
        user.lastName= req.body.lastName;
        user.password= req.body.password;
        user.save(function(err, user) {
          if (err){
            return res.json(err.errors);
          }else{
            res.json(user);
          } 
        });
      }
    });
}

exports.deleteUser=function(req,res,next){
  return User.findById(req.params.id,function(err,user){
      if (err) {
        return res.json({'status': 'Cannot Find User','error':err });
      } else {
        user.remove(function(err,user){
          if (err) {
            return res.json({'status': 'Sorry. User Cannot Be deleted.'});
          } else {
            return res.json(user);
          }
        })
      }
    });
}


exports.allUsers=function(req,res,next){
  return User.find({},function(err,users){
      if (err) {
        return res.json({'status': err});
      } else {
        res.json(users);
      }
  });
}

exports.sign_in=function(req,res,next){
  var userName=req.body.userName;
  var userPassword=req.body.password;
  return User.findOne({userName:userName,password: userPassword},function(err,user){
    if (err){
      res.status(401);
    }else{
      res.cookie('userName', user.userName, { signed: true });
      res.json({status: 'Successfully Signed In as '+user.userName});
    }
  });
}

exports.sign_out=function(req,res,next){
  res.clearCookie('userName');
  res.json({ status : 'Successfully Signed Out'});
}