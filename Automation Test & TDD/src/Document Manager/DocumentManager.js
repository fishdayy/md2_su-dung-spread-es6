"use strict";
exports.__esModule = true;
exports.DocumentManager = void 0;
var DocumentManager = /** @class */ (function () {
    function DocumentManager() {
    }
    DocumentManager.prototype.addDocument = function (document) {
        DocumentManager.listDocument.push(document);
    };
    DocumentManager.prototype.removeDocument = function (id) {
        return DocumentManager.listDocument = DocumentManager.listDocument.filter(function (e) {
            return (e.id != id);
        });
    };
    DocumentManager.prototype.showDocument = function () {
        return DocumentManager.listDocument;
    };
    DocumentManager.listDocument = [];
    return DocumentManager;
}());
exports.DocumentManager = DocumentManager;
