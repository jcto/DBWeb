//A.extend(B,C,D) 把对象C和D..的自有属性hasOwnProperty合并到B中 而且会把B的原有属性覆盖掉 
var CaoTest = CaoTest || {}
CaoTest.extend=function(base) {
	each(Array.prototype.slice.call(arguments, 1), function(extensionObject) {
		each(extensionObject, function(value, key) {
			if (extensionObject.hasOwnProperty(key)) base[key] = value;
		});
	});
	return base;
}