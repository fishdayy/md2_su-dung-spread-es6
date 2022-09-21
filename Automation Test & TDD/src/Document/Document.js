"use strict";
exports.__esModule = true;
exports.Document = void 0;
var Document = /** @class */ (function () {
    function Document(id, imprint, releaseNumber) {
        this._id = id;
        this._imprint = imprint;
        this._releaseNumber = releaseNumber;
    }
    Object.defineProperty(Document.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "imprint", {
        get: function () {
            return this._imprint;
        },
        set: function (imprint) {
            this._imprint = imprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "releaseNumber", {
        get: function () {
            return this._releaseNumber;
        },
        set: function (releaseNumber) {
            this._releaseNumber = releaseNumber;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}());
exports.Document = Document;
