var express = require('express'),
	config = require('./app/configuration/config'),
	path = require('path'),
	app = express(),
	port = process.env.PORT || config.get('port');

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));

require('./app/configuration/mongoose');
require('./app/api/routes')(app);

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
});