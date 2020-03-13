// imports the connection module
var connection = require("./connection.js");


var orm = {
	selectAll: function(table, cb) {
		var query = "SELECT * FROM ??;";
		connection.query(query, [table], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, colName, colValue, cb) {
		var query = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(query, [table, colName, colValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully inserted: " + result);
			cb(result);
		});
	},
	updateOne: function(table, colName, colValue, idCol, idValue, cb) {
		var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
		connection.query(query, [table, colName, colValue, idCol, idValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully updated: " + result);
			cb(result);
		});
	},
	deleteOne: function(table, idCol, idValue, cb) {
		var query = "DELETE FROM ?? WHERE ?? = ?;"
		connection.query(query, [table, idCol, idValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully deleted: " + result);
			cb(result);
		})
	}
};

module.exports = orm;