
var file = {};

file.words = function(str) {
	var arr = str.split(' ');
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		//obj[arr[i]] = (obj[arr[i]] || 0) + 1;
		var key = arr[i]
		if (obj[key] == undefined) {
			obj[key] = 1;
		}
		else {
			obj[key] += 1;
		}
	}
	return obj;
}

module.exports = file;