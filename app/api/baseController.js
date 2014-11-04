function processError (err) {
	console.log(err);
	throw err;
}

module.exports = {
	create: function (object) {
		object.save(function(err)) {
			if (err) {
				console.log(err);
				throw err;
			}
		}
	},
	read: function (Model) {
		return Model.find(function (err, collection) {
			if (!err) {
				return collection;
			} else {
				console.log(err);
				throw err; 
			}
		});
	},
	readById: function (Model, id) {
		return Model.findById(id, function (err, item) {
			if (!err) {
				return item;
			} else {
				console.log(err);
				throw err;
			}
		});
	},
	update: function (Model, object) {
		var currentObj = Model.findById(object._id);
		currentObj.remove(function(err){
			if (err) {
				console.log(err);
				throw err;
			}
		})
	}
	delete: function (object) {

	}
};