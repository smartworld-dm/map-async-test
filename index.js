var map = require("map-async");

var main = function (cb) {
	map([1, 2], function iterator(value, key, cb) {
	    cb(null, value + value)
	}, function finish(err, result) {
		console.log(result)
	});
}

main();