import {DocumentManager} from "../Document Manager/DocumentManager";
import {UserManager} from "../Document Manager/userManager";
import {Book} from "../Document/Book";
import {User} from "../Document/user";

let input = require('readline-sync');
let listDoc: DocumentManager = new DocumentManager();
let listUser: UserManager = new UserManager();

function mainMenu() {
    let menu = `
    1.Thêm tài liệu
    2.Xóa tài liệu
    3.Sua tai lieu
    4.Hiển thị
    0.Thoat`
    console.log(menu)
}

function addMenu() {
    let choice: number;
    do {
        let menu = `
        1.Them sach
        2.Them tap chi
        0.Thoat
        `
        console.log(menu);
        choice = +input.question("Nhap cua lua chon cua ban ? : ")
        switch (choice) {
            case 1:
                addBook();
                break;
            case 0:
                main();
                break;
        }
    } while (choice != 0);
}

function addBook() {
    // let id = +input.question("Nhap id : ");
    let producer = input.question("Nha xuat ban: ");
    let quantity = +input.question("So luong: ");
    let page = +input.question("So trang");
    let author = input.question("Tac gia");
    let book: Book = new Book(producer, quantity, page, author)
    listDoc.add(book);
}

function show() {
    let menu = `
    1.Hien thi tai lieu
    2.Hien thi sach
    3.Hien thi tap chi
    0.Thoát`
    let choice: number;
    do {
        console.log(menu)
        choice = +input.question("Nhap lua chon cua ban ? : ")
        switch (choice) {
            case 1:
                console.log(listDoc.showAll());
                break;
            case 2:
                showListBook();
                break;
            case 0:
                main();
                break;
        }
    } while (choice != 0);

}

function deleteMenu() {
    let id = +input.question("Nhap id can xoa: ");
    listDoc.delete(id);
    main();
}

function editMenu() {
    let id = input.question("Nhap id can sua : ");

    let producer = input.question("Nha xuat ban: ");
    let quantity = +input.question("So luong: ");
    let page = +input.question("So trang");
    let author = input.question("Tac gia");
    let book: Book = new Book(producer, quantity, page, author);
    listDoc.edit(id, book);
}

function showListBook() {
    console.log(listDoc.findByType(5));
    show();
}

function menuRegister() {
    let username = input.question("Ten Dang Ki: ")
    let password = input.question("Mat Khau: ")
    let user: User = new User(username, password);
    listUser.register(user);
    let usernameLogin = "";
    let passwordLogin = "";
    do {
        usernameLogin = input.question("Ten Dang Nhap: ")
        passwordLogin = input.question("Mat Khau: ")
    } while (!listUser.login(usernameLogin, passwordLogin));
    main();
}

function main() {
    let choice: number;
    do {
        mainMenu();
        choice = +input.question("Nhap lua chon cua ban ? : ")
        switch (choice) {
            case 1:
                addMenu();
                break;
            case 2:
                deleteMenu();
                break;
            case 3:
                editMenu();
                break;
            case 4:
                show();
                break;


        }
    } while (choice != 0);
}

menuRegister();
main();