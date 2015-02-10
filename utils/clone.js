var CaoTest = CaoTest || {}
	//把一个对象的自有属性copy到一个新的对象里 浅克隆
CaoTest.clone = function {
	objClone = {};
	each(obj, function(value, key) {
		if (obj.hasOwnProperty(key)) objClone[key] = value;
	});
	return objClone;
}