/**
 *
 * Created by warzhou1 on 3/14/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  },

  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  toggleComplete: function(todo) {
    var id = todo.id;
    var actionType;
    if (todo.complete) {
      actionType = TodoConstants.TODO_UNDO_COMPLETE;
    } else {
      actionType = TodoConstants.TODO_COMPLETE;
    }
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted: function(){
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY_COMPLETED
    });
  }

};

module.exports = TodoActions;
