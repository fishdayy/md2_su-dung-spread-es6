"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getID() {
        return this.ID;
    }
}
exports.Book = Book;
//# sourceMappingURL=qlBook.js.map