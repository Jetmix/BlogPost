function processError (err) {
	console.log(err);
	throw err;
}

module.exports = {
	create: function (object) {
		object.save(function(err) {
			if (err) {
				processError(err);
			}
		});
	},
	read: function (Model) {
		var result = undefined;
		Model.find(function (err, collection) {
			if (!err) {
				result = collection;
			} else {
				processError(err);
			}
		});
		return result;
	},
	readById: function (Model, id) {
		var result = undefined;
		return Model.findById(id, function (err, item) {
			if (!err) {
				result = item;
			} else {
				processError(err);
			}
		});
		return result;
	},
	update: function (Model, object) {
		Model.findById(object._id, function (err, item) {
			if (err) {
				processError(err);
			}
			item.remove(function(err){
				if (err) {
					processError(err);
				}
			})
		});
	},
	delete: function (id) {
		object.remove(function(err) {
			if (err) {
				processError(err);
			}
		})
	}
};