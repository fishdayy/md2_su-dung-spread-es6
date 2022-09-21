import {Book} from "../Document/Book";
import {Manager} from "../Interface/Manager";

export class BookManager implements Manager<Book> {

    static listBook: Book[] = [];

    add(T: Book) {
        BookManager.listBook.push(T);
    }

    remove(id) {
        return  BookManager.listBook = BookManager.listBook.filter((del) => {
            return (del.id != id);
        })
    }

    search(id) {
        BookManager.listBook.filter((find) => {
            return(find.id == id)
        })
    }

    show() {
        return BookManager.listBook
    }

    input(){
        let id:number = +readlineSync.question("nhap id: ");
        let imprint: string = readlineSync.question("nhap ten nha xuat ban:  ")
        let releaseNumber: number = +readlineSync.question("nhap so ban phat hanh: ")
        let author: string = readlineSync.question("nhap ten tac gia: ")
        let pages: number = +readlineSync.question("nhap so trang: ")
        let book: Book = new Book(id,imprint,releaseNumber,author,pages);
        BookManager.listBook.push(book)
    }
}

let readlineSync = require('readline-sync');
