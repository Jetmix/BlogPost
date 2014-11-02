var express = require('express'),
	config = require('./app/configuration/config'),
	path = require('path'),
	app = express(),
	Blog = require('./app/models/blog').Blog,
	port = process.env.PORT || config.get('port');

var testData = { name: "testData" }

app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
	var model = new Blog;
	model.name = testData.name;
	model.save();
	Blog.find(function(err, collection){
		if (err) {
			console.log(err);
		}
		console.log(collection);
	});
	response.send('Index.html here');
});

app.get('/api', function (request, response) {
	response.send('Api Documentation here');
});

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port)
});