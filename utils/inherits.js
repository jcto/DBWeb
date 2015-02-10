//这个方法很重要  返回一个未实例的函数function 它的原型扩展至extensions(扩展的方法属性)、继承自parent.prototype(这个复杂 又要继续研究  ==Chart.Element.prototype)
var CaoTest = CaoTest || {}
CaoTest.inherits=function(extensions) {
	//Basic javascript inheritance based on the model created in Backbone.js
	var parent = this;
	var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function() {
		console.log(this);
		return parent.apply(this, arguments);
	};

	var Surrogate = function() {
		this.constructor = ChartElement;
	};
	Surrogate.prototype = parent.prototype;
	ChartElement.prototype = new Surrogate();

	ChartElement.extend = inherits;

	if (extensions) CaoTest.extend(ChartElement.prototype, extensions);

	ChartElement.__super__ = parent.prototype;

	return ChartElement;
	
}