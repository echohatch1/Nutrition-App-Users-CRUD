'use strict';


const mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};



exports.create_a_user = function(req, res) {
  let new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    //res.json({ message: 'User successfully created' + ' ' + user});
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
    User.findById( req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user_first = function(req, res) {
    User.findOne( { first: req.params.userFirst }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user_email = function(req, res) {
    User.findOne( { email: req.params.userEmail }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};



exports.update_a_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    //res.json({ message: 'User successfully updated' + ' ' + user });
    res.json(user);
  });
};

// exports.update_by_email = function(req, res) {
//   var food = req.body.food;
//   User.findOneAndUpdate({email: req.params.userEmail}, function(err, user) {
//   if (err)
//     res.send(err);
//   //res.json({ message: 'User successfully updated' + ' ' + user });
//   User.foods.push(food);
//   User.save(done);
//   res.json(user);
// });
// };

// exports.update_by_email = function (req, res, next)
// {
// var food = req.body.food;
// User.findOneAndUpdate({email: req.params.userEmail}, {$push: {foods: food}}
//   );
// };

var food = { food:"tes12" };
User.findOneAndUpdate(
   { email: req.body.email }, 
   { $push: { foods: food  } },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    });


exports.delete_a_user = function(req, res) {


    User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};