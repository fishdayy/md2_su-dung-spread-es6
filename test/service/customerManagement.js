"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerManagement = void 0;
var customer_1 = require("../model/customer");
var CustomerManagement = /** @class */ (function () {
    function CustomerManagement() {
        this.listCustomer = [];
        this.input = require('readline-sync');
    }
    CustomerManagement.prototype.add = function () {
        var name = this.input.question("Ten: ");
        var age = +this.input.question("Tuoi: ");
        var idCard = +this.input.question("So CMND: ");
        var timeToRent = +this.input.question("So ngay thue: ");
        var room = this.input.question("Phong hang: ");
        var customer = new customer_1.Customer(name, age, idCard, timeToRent, room);
        this.listCustomer.push(customer);
    };
    CustomerManagement.prototype.remove = function () {
        var id = +this.input.question("nhap so CMND: ");
        this.listCustomer = this.listCustomer.filter(function (remove) {
            console.log(remove.idCard != id);
        });
    };
    CustomerManagement.prototype.info = function () {
        var id = +this.input.question("nhap so CMND: ");
        this.listCustomer.filter(function (search) {
            if (search.idCard === id) {
                console.log(search);
            }
            else {
                console.log('not found');
            }
        });
    };
    CustomerManagement.prototype.show = function () {
        console.log(this.listCustomer);
    };
    CustomerManagement.prototype.totalRent = function () {
        var id = +this.input.question("nhap so CMND: ");
        return this.listCustomer.forEach(function (item) {
            if (item.idCard == id) {
                console.log(item.timeToRent * item.room);
            }
        });
    };
    return CustomerManagement;
}());
exports.CustomerManagement = CustomerManagement;
