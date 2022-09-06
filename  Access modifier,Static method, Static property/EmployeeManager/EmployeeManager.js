"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    EmployeeManager.prototype.removeEmployee = function (list) {
        EmployeeManager.ListEmployee.splice(list - 1, 1);
    };
    EmployeeManager.prototype.editEmployee = function (list, newFirstName, newLastName, newBirthday, newAddress, newJobPosition) {
        var newEmployee = EmployeeManager.ListEmployee[list - 1];
        EmployeeManager.ListEmployee[list - 1].firstName = newFirstName;
        EmployeeManager.ListEmployee[list - 1].lastName = newLastName;
        EmployeeManager.ListEmployee[list - 1].birthday = newBirthday;
        EmployeeManager.ListEmployee[list - 1].address = newAddress;
        EmployeeManager.ListEmployee[list - 1].jobPosition = newJobPosition;
        return newEmployee;
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
manager1.removeEmployee(1);
manager1.editEmployee(1, 'Dinh', 'Tuan Anh');
console.log(manager1.showEmployee());
