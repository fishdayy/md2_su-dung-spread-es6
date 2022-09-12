"use strict";
exports.__esModule = true;
exports.PriorityPatient = void 0;
var PriorityPatient = /** @class */ (function () {
    function PriorityPatient() {
        this.data = [];
    }
    PriorityPatient.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var min = this.data[0];
        var minIndex = -1;
        this.data.forEach(function (name, index) {
            if (name[0] < min[0]) {
                min = name;
                minIndex = index;
            }
        });
        this.data.splice(minIndex, 1);
        return min[1];
    };
    PriorityPatient.prototype.enqueue = function (name, id) {
        this.data.push([id, name]);
    };
    PriorityPatient.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    PriorityPatient.prototype.size = function () {
        return this.data.length;
    };
    return PriorityPatient;
}());
exports.PriorityPatient = PriorityPatient;
