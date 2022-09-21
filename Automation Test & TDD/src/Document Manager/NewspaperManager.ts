import {Manager} from "../Interface/Manager";
import {Newspaper} from "../Document/Newspaper";
import {Magazine} from "../Document/Magazine";

export class NewspaperManager implements Manager<Newspaper>{

    static listNewspaper: Newspaper[] = [];

    add(T: Newspaper) {
        NewspaperManager.listNewspaper.push(T);
    }

    remove(id) {
        return NewspaperManager.listNewspaper = NewspaperManager.listNewspaper.filter((del) => {
            return (del.id != id);
        })
    }

    search(id) {
        NewspaperManager.listNewspaper.filter((find) => {
            return(find.id == id)
        })
    }

    show() {
        return NewspaperManager.listNewspaper
    }

    input(){
        let id:number = +readlineSync.question("nhap id: ");
        let imprint: string = readlineSync.question("nhap ten nha xuat ban:  ")
        let releaseNumber: number = +readlineSync.question("nhap so ban phat hanh: ")
        let releaseDay: number = +readlineSync.question("nhap ngay phat hanh: ")
        let newspaper: Newspaper = new Newspaper(id,imprint,releaseNumber,releaseDay);
        NewspaperManager.listNewspaper.push(newspaper)
    }
}

let readlineSync = require('readline-sync');


