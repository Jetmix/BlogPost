var Post = require('../models/post').Post,
	baseController = require('./baseController');

module.exports = function (app) {
	app.get('/api/posts', function (request, response) {
		Post.find(function (err, collection) {
			if (!err) {
				response.send(collection);
			} else {
				response.statusCode = 500;
				response.send({ status: "Error", errors: err });
			}
		});
	});

	app.get('/api/posts/:id', function (request, response) {
		var post = baseController.readById(Post, request.params.id);
		response.send(post);
	});

	app.post('/api/posts', function (request, response) {
	    var post = new Post({
	    	author: null,
	    	text: request.body.text
	    });
	    baseController.create(post);
	    response.send({ status: "OK" });
	});

	app.put('/api/posts/:id', function (request, response) {
	    var post = new Post({
	    	_id: request.params.id,
	    	author: request.body.author,
	    	text: request.body.text,
	    	created: request.body.created
	    });
	    baseController.update(Post, post);
	    response.send({ status: "OK" });
	});

	app.delete('/api/posts/:id', function (request, response) {
	    baseController.delete(request.params.id);
	});
}