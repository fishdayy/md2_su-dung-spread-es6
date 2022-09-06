"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
class BookManager {
    constructor() {
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    getList() {
        return this.books;
    }
    delete(ID) {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    }
    update(ID, name) {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    }
    findBook(ID) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    }
}
exports.BookManager = BookManager;
//# sourceMappingURL=bookManager.js.map