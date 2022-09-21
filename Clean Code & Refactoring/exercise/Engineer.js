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
exports.Engineer = void 0;
var Cadres_1 = require("./Cadres");
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(fullName, age, gender, address, trainingIndustry) {
        var _this = _super.call(this, fullName, age, gender, address) || this;
        _this._trainingIndustry = trainingIndustry;
        return _this;
    }
    Object.defineProperty(Engineer.prototype, "trainingIndustry", {
        get: function () {
            return this._trainingIndustry;
        },
        set: function (value) {
            this._trainingIndustry = value;
        },
        enumerable: false,
        configurable: true
    });
    return Engineer;
}(Cadres_1.Cadres));
exports.Engineer = Engineer;
//# sourceMappingURL=Engineer.js.map