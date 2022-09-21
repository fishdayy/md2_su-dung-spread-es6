"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customerManagement_1 = require("../service/customerManagement");
var MenuManagementHotel = /** @class */ (function () {
    function MenuManagementHotel() {
        this.listCustomer = new customerManagement_1.CustomerManagement();
        this.input = require('readline-sync');
    }
    MenuManagementHotel.prototype.main = function () {
        var choice;
        do {
            this.mainMenu();
            choice = +this.input.question("Nhap lua chon cua ban ? : ");
            switch (choice) {
                case 1:
                    this.addMenuCustomer();
                    break;
                case 2:
                    this.addMenuHotel();
                    break;
            }
        } while (choice != 0);
    };
    MenuManagementHotel.prototype.mainMenu = function () {
        var choice;
        var menu = "1.kh\u00E1ch h\u00E0ng\n2. hotel";
        console.log(menu);
    };
    MenuManagementHotel.prototype.addMenuCustomer = function () {
        var choice;
        do {
            var menu = "1. Th\u00EAm kh\u00E1ch h\u00E0ng\n2. X\u00F3a kh\u00E1ch h\u00E0ng\n3. T\u00ECm kh\u00E1ch h\u00E0ng\n4. Hi\u1EC3n th\u1ECB t\u1EA5t c\u1EA3 kh\u00E1ch h\u00E0ng\n0. Tho\u00E1t";
            console.log(menu);
            choice = +this.input.question("nhap lua chon cua ban? : ");
            switch (choice) {
                case 1:
                    this.listCustomer.add();
                    break;
                case 2:
                    this.listCustomer.remove();
                    break;
                case 3:
                    this.listCustomer.info();
                    break;
                case 4:
                    this.listCustomer.show();
                    break;
                case 0:
                    this.mainMenu();
                    break;
            }
        } while (choice != 0);
    };
    MenuManagementHotel.prototype.addMenuHotel = function () {
    };
    return MenuManagementHotel;
}());
var menuManagementHotel = new MenuManagementHotel();
menuManagementHotel.main();
