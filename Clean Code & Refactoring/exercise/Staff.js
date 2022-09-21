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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Cadres_1 = require("./Cadres");
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(fullName, age, gender, address, work) {
        var _this = _super.call(this, fullName, age, gender, address) || this;
        _this._work = work;
        return _this;
    }
    Object.defineProperty(Staff.prototype, "work", {
        get: function () {
            return this._work;
        },
        set: function (value) {
            this._work = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}(Cadres_1.Cadres));
exports.Staff = Staff;
//# sourceMappingURL=Staff.js.map