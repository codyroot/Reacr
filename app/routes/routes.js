/* global require, module */

var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/ReactApp').ReactApp);

module.exports = function (app) {
	"use strict";

	app.get('/', function (req, res) {

		// React.renderToString takes your component
		// and generates the markup @server

		var serverHTML = React.renderToString(ReactApp({}));

		// Rendered by reactjs
		// console.log(serverHTML);
		res.render('index.ejs', {allTheStuff: serverHTML});
	});

};
