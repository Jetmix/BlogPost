var nconf = require('nconf'),
	fs = require('fs');

nconf.argv()
	.env()
	.file({ file: './app/configuration/config.json' });

module.exports = nconf;