var express = require('express'),
	config = require('./app/configuration/config'),
	path = require('path'),
	app = express(),
	port = process.env.PORT || config.get('port');

app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
	response.send('Index.html here');
});

app.get('/api', function (request, response) {
	response.send('Api Documentation here');
});

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
});