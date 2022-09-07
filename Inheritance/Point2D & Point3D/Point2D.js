"use strict";
exports.__esModule = true;
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point2D.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    Point2D.prototype.getXY = function () {
        return [this._x, this._y];
    };
    return Point2D;
}());
exports.Point2D = Point2D;
