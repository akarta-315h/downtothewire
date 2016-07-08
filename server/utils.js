//Probably should move more stuff into here

var shortid = require("shortid")
var logger = require("./logger")

var slugify = function(str) {
	str = str.replace(/[ \t\n_]+/g, "_")
	str = str.replace(/[^\w_]+/g, "")
	return str.toLowerCase()
}

//Recursive promises, weeee....
var generateId = function(collection) {
	let id = shortid.generate();
	return collection.findOne({guid: id}).then((data) => data ? generateId(db) : id);
}

module.exports = {
	slugify: slugify,
	generateId: generateId,
}
