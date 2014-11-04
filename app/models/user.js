var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	login: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

userSchema.methods.checkPassword = function (password) {
	return this.password == password;
};

module.exports.User = mongoose.model('User', userSchema);