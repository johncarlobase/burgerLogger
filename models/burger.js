// dependencies
var orm = require("../config/orm.js");

var burger = {
	// selects all burgers in the database
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	// inserts one record into the burgers table
	insertOne: function(burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},
	// updates a burger entry
	updateOne: function(idNum, cb) {
		orm.updateOne("burgers", "devoured", "1", "id", idNum, function(res) {
			cb(res);
		});
	},
	// deletes a burger entry
	deleteOne: function(idNum, cb) {
		orm.deleteOne("burgers", "id", idNum, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;

// burger.deleteOne("5");
// burger.selectAll();
