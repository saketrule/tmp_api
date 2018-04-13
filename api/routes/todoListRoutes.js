'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/tasks/:mynum')
    .get(todoList.read_a_task)
    
};
