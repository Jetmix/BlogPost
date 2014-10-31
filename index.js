var express = require('express'),
	config = require('./app/configuration/config'),
	app = express(),
	port = process.env.PORT || config.get('port');

app.set('port', port);

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public'));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function (request, response) {
	response.send('Index.html here');
});

app.get('/api', function (request, response) {
	response.send('Api Documentation here');
});

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
});