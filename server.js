/* global require, __dirname */
var express = require('express'),
    path = require('path');

// Call JSX Transformer
require("node-jsx").install();

var app = express(),
    port = 1007,
    bodyParser = require('body-parser'),
    routing = require('./app/routes/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Config & Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routing
routing(app);

// Server start
app.listen(port);

console.log('Server is Up and Running at Port : ' + port);
