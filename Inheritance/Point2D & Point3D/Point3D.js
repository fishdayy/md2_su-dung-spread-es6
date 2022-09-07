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
var Point2D_1 = require("./Point2D");
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this._z = z;
        return _this;
    }
    Object.defineProperty(Point3D.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (z) {
            this._z = z;
        },
        enumerable: false,
        configurable: true
    });
    Point3D.prototype.setXYZ = function (x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    };
    Point3D.prototype.getXYZ = function () {
        return [this._x, this._y, this._z];
    };
    return Point3D;
}(Point2D_1.Point2D));
var point3D = new Point3D(1, 2, 3);
point3D.setXYZ(3, 2, 1);
console.log(point3D.getXYZ());
