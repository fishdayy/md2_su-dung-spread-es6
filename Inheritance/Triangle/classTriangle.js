"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classShape_1 = require("./classShape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    Triangle.prototype.getArea = function () {
        return Math.sqrt((this.getPerimeter() / 2) * ((this.getPerimeter() / 2) - this.side1) * ((this.getPerimeter() / 2) - this.side2) * ((this.getPerimeter() / 2) - this.side3));
    };
    Triangle.prototype.getPerimeter = function () {
        return (this.side1 + this.side2 + this.side3);
    };
    return Triangle;
}(classShape_1.Shape));
var triangle = new Triangle('tam giac', 'vang', 6, 6, 6);
console.log(triangle.getPerimeter() + " " + triangle.getArea());
