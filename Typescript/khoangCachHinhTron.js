"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
function distance(circleOne, circleTwo, d) {
    let distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circle1 = new Circle_1.default(9);
let circle2 = new Circle_1.default(5);
console.log(distance(circle1, circle2, 24));
//# sourceMappingURL=khoangCachHinhTron.js.map