"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Tiger");
var Chicken_1 = require("./Chicken");
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
});
