//	SERVER.JS

var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");

var orm = require("./config/orm.js");

//=================================================================
var dataIn = require("./models/burger.js");
var exphbs = require("express-handlebars");
var app = express();
var renderFunction = require("./controllers/renderFunction.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
app.get("/", function(request, response) {
	orm.selectAll(response, renderFunction);
});

app.post("/add", function(request, response) {
	orm.insertOne(request.body);
});

app.post("/devour", function(request, response) {
	orm.updateOne(request.body);
});


// Initiate the listener.
app.listen(port);
