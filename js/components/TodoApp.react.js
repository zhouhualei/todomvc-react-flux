var Header = require('./Header.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}


var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
      </div>
    );
  }
});

module.exports = TodoApp;