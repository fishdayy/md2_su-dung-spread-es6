"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name, age, idCard, timeToRent, room) {
        this._name = name;
        this._age = age;
        this._idCard = idCard;
        this._timeToRent = timeToRent;
        this._room = room;
    }
    Object.defineProperty(Customer.prototype, "timeToRent", {
        get: function () {
            return this._timeToRent;
        },
        set: function (value) {
            this._timeToRent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "room", {
        get: function () {
            return this._room;
        },
        set: function (value) {
            this._room = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "idCard", {
        get: function () {
            return this._idCard;
        },
        set: function (value) {
            this._idCard = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
