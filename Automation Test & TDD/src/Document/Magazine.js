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
exports.Magazine = void 0;
var Document_1 = require("./Document");
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(id, imprint, releaseNumber, issueNumber, releaseMonth) {
        var _this = _super.call(this, id, imprint, releaseNumber) || this;
        _this._issueNumber = issueNumber;
        _this._releaseMonth = releaseMonth;
        return _this;
    }
    Object.defineProperty(Magazine.prototype, "issueNumber", {
        get: function () {
            return this._issueNumber;
        },
        set: function (value) {
            this._issueNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Magazine.prototype, "releaseMonth", {
        get: function () {
            return this._releaseMonth;
        },
        set: function (value) {
            this._releaseMonth = value;
        },
        enumerable: false,
        configurable: true
    });
    return Magazine;
}(Document_1.Document));
exports.Magazine = Magazine;
