"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookList_1 = require("./bookList");
let book1 = new bookList_1.Book('The Design of EveryDay Things', 'Don Norman', false);
let book2 = new bookList_1.Book('The Most Human Human', 'Brian Christian', true);
let books = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You still need to read "' + bookInfo);
    }
}
//# sourceMappingURL=mainBookList.js.map