"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = exports.Room = void 0;
var Room;
(function (Room) {
    Room[Room["A"] = 500] = "A";
    Room[Room["B"] = 300] = "B";
    Room[Room["C"] = 100] = "C";
})(Room = exports.Room || (exports.Room = {}));
var Hotel = /** @class */ (function () {
    function Hotel(room) {
        this._room = room;
    }
    Object.defineProperty(Hotel.prototype, "room", {
        get: function () {
            return this._room;
        },
        set: function (value) {
            this._room = value;
        },
        enumerable: false,
        configurable: true
    });
    return Hotel;
}());
exports.Hotel = Hotel;
