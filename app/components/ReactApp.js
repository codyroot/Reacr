/** @jsx React.DOM */

var React = require('react/addons');

var ReactApp = React.createClass({
	getInitialState: function() {
		return {value: 'Hello!'};
	},
	bindMeBro: function(event) {
		this.setState({value: event.target.value});
	},
	render: function() {
		var value = this.state.value;
		return (
			<div>
				<input type="text" value={value} onChange={this.bindMeBro} />
				<p>{value}</p>
			</div>
		);
	}
});

console.dir(ReactApp);

/* Module.exports instead of normal dom mounting */
exports.ReactApp = ReactApp;
