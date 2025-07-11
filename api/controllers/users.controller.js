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

exports.update_by_email = function (req, res, next)
{
let fdcId = req.body.fdcId;
let name = req.body.name;
let servings = req.body.servings;
let meal = req.body.meal;
let repeat = req.body.repeat;
let favorite = req.body.favorite;
let timeStamp = Date.now();

User.findOneAndUpdate({email: req.params.userEmail}, {$push: {foods: {"fdcId": fdcId, "name": name, "servings": servings, "meal": meal, "repeat": repeat, "favorite": favorite, "date": timeStamp}}}, {upsert: true}, function(err, user) {
  if (err)
    res.send(err);
  res.json({ message: 'User successfully updated' });
}
  )
};


exports.delete_a_user = function(req, res) {


    User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};