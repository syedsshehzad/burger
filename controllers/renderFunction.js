//	The Webpage Render Function!!!!

var renderFunction = function (response, results) {
	var eatenBurgers = [];
	var freshBurgers = [];
	
	results.forEach(entry => {

		if (entry.devoured == true) {
			eatenBurgers.push(entry);
		} else if (entry.devoured == false) {
			freshBurgers.push(entry)
		}

	});

	response.render("index", { newburger: freshBurgers, eatenburger: eatenBurgers })
};

module.exports = renderFunction;