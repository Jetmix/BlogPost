var mongoose = require('mongoose'),
	config = require('../configuration/config'),
	connectionString = config.get('database:connection') + config.get('database:name'); 

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', function (err) {
    console.log(err.message);
});

db.once('open', function callback () {
    console.log("Connected to DB: " + connectionString);
});
