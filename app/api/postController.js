var Post = require('../models/post').Post;

module.exports = function (app) {
	app.get('/api/posts', function (req, res) {
	    res.send('This is not implemented now');
	});

	app.get('/api/posts/:id', function (req, res) {
	    res.send('This is not implemented now');
	});

	app.post('/api/posts', function (req, res) {
	    res.send('This is not implemented now');
	});

	app.put('/api/posts/:id', function (req, res){
	    res.send('This is not implemented now');    
	});

	app.delete('/api/posts/:id', function (req, res){
	    res.send('This is not implemented now');
	});
}