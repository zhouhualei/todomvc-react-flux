var Header = require('./Header.react');
var Footer = require('./Footer.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');
var MainSection = require('./MainSection.react');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}


var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListerner(this._onChange);
  },

  render: function () {
    return (
      <div>
        <Header />
        <MainSection allToos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },

  /**
   * handle change event from TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;