// 递归方法：
// 这个是函数表达式而不是函数定义，这样的函数表达式，函数名walk只在函数内部有效
// 该方法按照html源码顺序访问节点
var  walk_the_dom = function walk(node, func) {
    'use strict';
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node);
        node = node.nextSibling;
    }
};