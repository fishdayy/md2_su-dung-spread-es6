"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var Book_1 = require("../Document/Book");
var BookManager = /** @class */ (function () {
    function BookManager() {
    }
    BookManager.prototype.add = function (T) {
        BookManager.listBook.push(T);
    };
    BookManager.prototype.remove = function (id) {
        return BookManager.listBook = BookManager.listBook.filter(function (del) {
            return (del.id != id);
        });
    };
    BookManager.prototype.search = function (id) {
        BookManager.listBook.filter(function (find) {
            return (find.id == id);
        });
    };
    BookManager.prototype.show = function () {
        return BookManager.listBook;
    };
    BookManager.prototype.input = function () {
        var id = +readlineSync.question("nhap id: ");
        var imprint = readlineSync.question("nhap ten nha xuat ban:  ");
        var releaseNumber = +readlineSync.question("nhap so ban phat hanh: ");
        var author = readlineSync.question("nhap ten tac gia: ");
        var pages = +readlineSync.question("nhap so trang: ");
        var book = new Book_1.Book(id, imprint, releaseNumber, author, pages);
        BookManager.listBook.push(book);
    };
    BookManager.listBook = [];
    return BookManager;
}());
exports.BookManager = BookManager;
var readlineSync = require('readline-sync');
var book1 = new BookManager();
book1.input();
book1.input();
book1.input();
console.log(book1.show());
