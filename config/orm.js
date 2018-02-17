//	ORM.JS

var connection = require("./connection.js");

var orm = {

	selectAll: function() {
		connection.query("SELECT * FROM burgers", (err, res) => {
			if (err) throw err;
			return res;
		});
	},

	insertOne: function() {
		connection.query("INSERT INTO burgers SET ?",
		{
			burger_name: burger_name,
			devoured: devoured
		},
		(err, res) => {
			if (err) throw err;
			return res;
		});
	},
	
	updateOne: function() {
		connection.query("UPDATE burgers SET devoured=" + input + " WHERE ege",
		(err, res) => {
			if (err) throw err;
			return res;
		});
	}
}

module.exports = orm;