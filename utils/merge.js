//这个合并跟extend扩展差不多 后面的属性会覆盖前面的 都extend到{}对象里
function(base, master) {
	//Merge properties in left object over to a shallow clone of object right.
	var args = Array.prototype.slice.call(arguments, 0);
	args.unshift({});
	return extend.apply(null, args);
}