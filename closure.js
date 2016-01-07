// 保护私有变量
var myObject = (function () {
	var privateVar = 1;

	return {
		getValue: function () {
			return privateVar;
		},
		setValue: function (value) {
			privateVar = value;
		}
	}
}());

console.log(myObject.getValue());
myObject.setValue(1103);
console.log(myObject.getValue());

// 闭包：函数可以访问它被定义时的上下文

// 设置node背景颜色渐变
var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			setTimeout(step, 100);
		}
	}
    setTimeout(step, 100);
};
fade(document.body);

// 一个非常经典的错误例子：
// 这个方法想要为nodes的每个元素绑定一个onclick的响应函数，响应式点击之后alert该元素的序号
// 然而，这样的实现，每次alert的都是nodes的个数，因为i最后的值就是nodes的个数，而响应函数在执行时可以访问到它被定义时的上下文，
// 在该上下文中，i的值最后就是nodes的个数不变
var add_handlers_bad = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function () {
			alert(i);
		};
	}
}

// 正确的做法：
// 为什么这个方法是正确的呢，因为onclick响应函数定义在helper的内部，alert执行时访问的i是helper的形参，值不变
var add_handlers_good = function (nodes) {
	var helper = function (i) {
		return function () {
			alert(i);
		};
	};
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = helper(i);
	}
}













