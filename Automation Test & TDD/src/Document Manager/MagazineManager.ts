import {Manager} from "../Interface/Manager";
import {Magazine} from "../Document/Magazine";

export class MagazineManager implements Manager<Magazine>{

    static listMagazine: Magazine[] = [];

    add(T: Magazine) {
        MagazineManager.listMagazine.push(T);
    }

    remove(id) {
        return  MagazineManager.listMagazine = MagazineManager.listMagazine.filter((del) => {
            return (del.id != id);
        })
    }

    search(id) {
        MagazineManager.listMagazine.filter((find) => {
            return(find.id == id)
        })
    }

    show() {
        return MagazineManager.listMagazine
    }

    input(){
        let id:number = +readlineSync.question("nhap id: ");
        let imprint: string = readlineSync.question("nhap ten nha xuat ban:  ")
        let releaseNumber: number = +readlineSync.question("nhap so ban phat hanh: ")
        let issueNumber: number = +readlineSync.question("nhap so phat hanh: ")
        let releaseMonth: number = +readlineSync.question("nhap thang phat hanh: ")
        let magazine: Magazine = new Magazine(id,imprint,releaseNumber,issueNumber,releaseMonth);
        MagazineManager.listMagazine.push(magazine)
    }
}

let readlineSync = require('readline-sync');
let magazine1 = new MagazineManager();