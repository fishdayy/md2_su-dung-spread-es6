"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, birthday, address, jobPosition) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "birthday", {
        set: function (birthday) {
            this._birthday = birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "jobPosition", {
        set: function (jobPosition) {
            this._jobPosition = jobPosition;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
