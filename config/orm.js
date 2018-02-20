//	ORM.JS

var connection = require("./connection.js");

var orm = {

	selectAll: function(response, renderFunction) {
		connection.query("SELECT * FROM burgers", (err, res) => {
			if (err) throw err;
			renderFunction(response, res);
		});
	},

	insertOne: function(params) {
		connection.query("INSERT INTO burgers SET ?", params,
		(err, res) => {
			if (err) throw err;
			console.log(res);
		});
	},
	
	updateOne: function(params) {
		connection.query("UPDATE burgers SET devoured=1 WHERE ?", params,
		(err, res) => {
			if (err) throw err;
			console.log(res);
		});
	}
}

module.exports = orm;