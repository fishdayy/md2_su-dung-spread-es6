"use strict";
exports.__esModule = true;
var Book_1 = require("../Document/Book");
var Magazine_1 = require("../Document/Magazine");
var Newspaper_1 = require("../Document/Newspaper");
var readlineSync = require('readline-sync');
var id = +readlineSync.question("nhap id: ");
var imprint = readlineSync.question("nhap ten nha xuat ban:  ");
var releaseNumber = +readlineSync.question("nhap so ban phat hanh: ");
var author = readlineSync.question("nhap ten tac gia: ");
var pages = +readlineSync.question("nhap so trang: ");
var issueNumber = +readlineSync.question("nhap so phat hanh: ");
var releaseMonth = +readlineSync.question("nhap thang phat hanh: ");
var releaseDay = +readlineSync.question("nhap ngay phat hanh: ");
var book1 = new Book_1.Book(id, imprint, releaseNumber, author, pages);
console.log(book1);
var magazine1 = new Magazine_1.Magazine(id, imprint, releaseNumber, issueNumber, releaseMonth);
console.log(magazine1);
var newSpaper1 = new Newspaper_1.Newspaper(id, imprint, releaseNumber, releaseDay);
console.log(newSpaper1);
