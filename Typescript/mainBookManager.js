"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qlBook_1 = require("./qlBook");
const bookManager_1 = require("./bookManager");
let book1 = new qlBook_1.Book('B001', 'Lập trình Java');
let book2 = new qlBook_1.Book('B002', 'Lập trình PHP');
let book3 = new qlBook_1.Book('B003', 'Lập trình TypeScript');
let bookManager = new bookManager_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('B003', 'lập trình MySQL');
console.log(bookManager.getList());
//# sourceMappingURL=mainBookManager.js.map