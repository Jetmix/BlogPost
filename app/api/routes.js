module.exports = function (app) {
	require('./postController')(app);

	app.get('/', function (request, response) {
		response.send('index.html');
	});

	app.get('/api', function (request, response) {
		response.send('Api Documentation here');
	});
}