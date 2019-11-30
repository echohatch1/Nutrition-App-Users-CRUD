'use strict';
module.exports = function(app) {
  const users = require('../controllers/users.controller');

  // Users Routes

  //get/create users
  app.route('/user')
    .get(users.list_all_users)
    .post(users.create_a_user);

  //search/updat/delete by id
  app.route('/users/id/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);


  //search by first
  app.route('/users/first/:userFirst')
    .get(users.read_a_user_first);

  //search/update by email
  app.route('/users/email/:userEmail')
    .get(users.read_a_user_email)
    .put(users.update_by_email);
};