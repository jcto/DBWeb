//数组或对象元素的位置
function(arrayToSearch, item) {
	if (Array.prototype.indexOf) {
		return arrayToSearch.indexOf(item);
	} else {
		for (var i = 0; i < arrayToSearch.length; i++) {
			if (arrayToSearch[i] === item) return i;
		}
		return -1;
	}
}