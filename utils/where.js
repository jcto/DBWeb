function(collection, filterCallback) {
	var filtered = [];
	helpers.each(collection, function(item) {
		if (filterCallback(item)) {
			filtered.push(item);
		}
	});
	return filtered;
}