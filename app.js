/* global require, __dirname */

// Load this pkgs at first
var express = require('express'),
    path = require('path'),
    jsx = require("node-jsx");

// Call JSX Transformer
jsx.install();

var app = express(),
    port = 1007,
    routing = require('./app/routes/routes');

// Config & Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routing
routing(app);

module.exports = app;
