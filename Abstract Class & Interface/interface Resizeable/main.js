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
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var ResizeableCircle = /** @class */ (function (_super) {
    __extends(ResizeableCircle, _super);
    function ResizeableCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResizeableCircle.prototype.resize = function (percent) {
        this.radius = Math.floor(Math.random() * 100);
        return this.radius;
    };
    return ResizeableCircle;
}(Circle_1.Circle));
var ResizeableRectangle = /** @class */ (function (_super) {
    __extends(ResizeableRectangle, _super);
    function ResizeableRectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResizeableRectangle.prototype.resize = function (percent) {
        this.width = Math.floor(Math.random() * 100);
        this.width = Math.floor(Math.random() * 100);
        return this.calculatePerimeter();
    };
    return ResizeableRectangle;
}(Rectangle_1.Rectangle));
var ResizeableSquare = /** @class */ (function (_super) {
    __extends(ResizeableSquare, _super);
    function ResizeableSquare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResizeableSquare.prototype.resize = function (percent) {
        this.width = Math.floor(Math.random() * 100);
        return this.width;
    };
    return ResizeableSquare;
}(Square_1.Square));
var resizeableCircle1 = new ResizeableCircle('tron', 5);
console.log(resizeableCircle1.resize(6));
var resizeableRectangle1 = new ResizeableRectangle(2, 5, 'chu nhat');
console.log(resizeableRectangle1.resize(5));
var resizeableSquare1 = new ResizeableSquare('vuong', 3);
console.log(resizeableSquare1.resize(2));
