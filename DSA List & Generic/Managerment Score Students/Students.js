"use strict";
exports.__esModule = true;
exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Students.prototype.readName = function () {
        return this.name;
    };
    Students.prototype.readScore = function () {
        return this.score;
    };
    return Students;
}());
exports.Students = Students;
