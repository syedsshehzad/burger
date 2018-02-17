//	SERVER.JS

var app = require("express");
var override = require("method-override");
var parser = require("body-parser");

var orm = require("./config/orm.js");

// var cb = function(dog) {
// 	console.log(dog);
// }

//var result = orm(cb);

orm().then(function(returned) {
	console.log(returned);
})