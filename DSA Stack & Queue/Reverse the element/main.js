"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.reverse();
console.log(stack);
