/**
 * Created by warzhou1 on 3/14/15.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

console.log(ReactPropTypes);

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.string,
    value: ReactPropTypes.string
  },

  getInitialState: function () {
    return {
      value: this.props.value || ''
    };
  },

  render: function () {
    return (
      <input className={this.props.className} id={this.props.id} placeholder={this.props.placehoder}
        onBlur={this._save} onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value}
        autoFocus={true} />
    );
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  },

  _onChnage: function (event) {
    this.setState({value: event.target.value});
  },

  _onKeyDown: function () {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
});

module.exports = TodoTextInput;