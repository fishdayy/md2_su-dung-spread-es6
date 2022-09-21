"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadres = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Cadres = /** @class */ (function () {
    function Cadres(fullName, age, gender, address) {
        this._fullName = "";
        this._age = 0;
        this._gender = Gender.Other;
        this._address = "";
        this._fullName = fullName;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }
    Object.defineProperty(Cadres.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fullName) {
            this._fullName = fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cadres.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return Cadres;
}());
exports.Cadres = Cadres;
//# sourceMappingURL=Cadres.js.map