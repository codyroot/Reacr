/* global require */
/** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = React.createFactory(require('./components/ReactApp').ReactApp);

var entry = document.getElementById("react-entry");

React.renderComponent(new ReactApp({}), entry);
