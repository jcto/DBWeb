//这个变量一个对象里的键和值 key and value
var each = function(loopable, callback, self) {
	var additionalArgs = Array.prototype.slice.call(arguments, 3);
	// Check to see if null or undefined firstly.
	if (loopable) {
		if (loopable.length === +loopable.length) {
			var i;
			for (i = 0; i < loopable.length; i++) {
				callback.apply(self, [loopable[i], i].concat(additionalArgs));
			}
		} else {
			for (var item in loopable) {
				callback.apply(self, [loopable[item], item].concat(additionalArgs));
			}
		}
	}
};
var obj = {
	a: 'a',
	b: 'b'
};
each(obj, function(value, key) {
	var t = this,
		w = window;
	console.log(value + ":" + key + ":" + t)
},window,{a:'m',c:'l'});