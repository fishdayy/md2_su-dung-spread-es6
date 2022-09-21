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
exports.Worker = void 0;
var Cadres_1 = require("./Cadres");
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(fullName, age, gender, address, rank) {
        var _this = _super.call(this, fullName, age, gender, address) || this;
        _this._rank = rank;
        return _this;
    }
    Object.defineProperty(Worker.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        set: function (value) {
            this._rank = value;
        },
        enumerable: false,
        configurable: true
    });
    return Worker;
}(Cadres_1.Cadres));
exports.Worker = Worker;
//# sourceMappingURL=Worker.js.map