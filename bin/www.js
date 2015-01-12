#!/usr/bin/env node

var app = require('../app');

var server = app.listen(1007, function() {
	console.log('Express server listening on port ' + server.address().port);
});
