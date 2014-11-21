var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	User = require('./user').User;

var postSchema = new Schema({
	author: Schema.ObjectId,
	text: String,
	created: { type: Date, default: Date.now }
});

module.exports.Post = mongoose.model('Post', postSchema);