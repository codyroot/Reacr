/* global require */
/** @jsx React.DOM */

/**
 * Clientside Entry Point
 */
var React = require('react/addons');
var ReactApp = React.createFactory(require('./components/ReactApp'));

console.log(ReactApp);

var entry = document.getElementById("react-entry");

React.renderComponent(new ReactApp({}), entry);
