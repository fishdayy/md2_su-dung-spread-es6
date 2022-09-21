"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadresManagement = void 0;
var CadresManagement = /** @class */ (function () {
    function CadresManagement() {
    }
    CadresManagement.prototype.addCadres = function (cadres) {
        CadresManagement.listCadres.push(cadres);
    };
    CadresManagement.prototype.findCadres = function (list) {
        return CadresManagement.listCadres[list - 1];
    };
    CadresManagement.prototype.showCadres = function () {
        return CadresManagement.listCadres;
    };
    CadresManagement.prototype.end = function () {
        return close();
    };
    CadresManagement.listCadres = [];
    return CadresManagement;
}());
exports.CadresManagement = CadresManagement;
//# sourceMappingURL=StaffManagement.js.map