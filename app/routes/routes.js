/* global require, module */

var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function (app) {
	app.get('/', function (req, res) {

		// React.renderToString renders the Components markup serverside
		var serverHTML = React.renderToString(ReactApp({}));

		// Render Template and serve the data
		res.render('index.ejs', {
			allTheStuff: serverHTML
		});
	});
};
