var mongoose = require('mongoose'),
	config = require('../configuration/config'),
	connectionString = config.get('database:connection') + config.get('database:name'); 

console.log(connectionString);
mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log(err.message);
});

db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;

var Blog = new Schema({
	name: String,
	created: { type: Date, default: Date.now }
});

var BlogModel = mongoose.model('Blog', Blog);

module.exports.Blog = BlogModel;