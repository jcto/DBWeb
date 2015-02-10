//从前往后找到第一个
function(arrayToSearch, filterCallback, startIndex) {
	// Default to start of the array
	if (!startIndex) {
		startIndex = -1;
	}
	for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
		var currentItem = arrayToSearch[i];
		if (filterCallback(currentItem)) {
			return currentItem;
		}
	}
}