"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.addEmployee = function (employee) {
        EmployeeManager.ListEmployee.push(employee);
    };
    EmployeeManager.prototype.showEmployee = function () {
        return EmployeeManager.ListEmployee;
    };
    EmployeeManager.ListEmployee = [];
    return EmployeeManager;
}());
var employee1 = new Employee_1.Employee('dinh', 'anh', '', "ads", "");
var employee2 = new Employee_1.Employee('dinhr', 'ansh');
var employee3 = new Employee_1.Employee('dinhg', 'anhy');
var manager1 = new EmployeeManager();
manager1.addEmployee(employee1);
manager1.addEmployee(employee2);
manager1.addEmployee(employee3);
console.log(manager1.showEmployee());
