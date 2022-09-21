"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function checkSymmetricStrings(s) {
    var stack = new Stack_1.Stack(s);
    var queue = new Queue_1.Queue(s);
    for (var i = 0; i < s.length; i++) {
        stack.push(s[i]);
        queue.enqueue(s[i]);
    }
    if (stack.pop() == queue.dequeue()) {
        return 'symmetric';
    }
    else {
        return 'not symmetric';
    }
}
console.log(checkSymmetricStrings("aaaaaaa"));
