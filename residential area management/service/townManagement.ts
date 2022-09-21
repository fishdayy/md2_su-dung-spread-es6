import {Town} from "../model/town";

export class TownManagement extends Town {
    input = require('readline-sync');
    listTown: Town[] = [];

    add(){
        let numberOfFamily = this.input.question("Nhap so luong gia dinh: ");
        let infoFamily = this.input.question("Nhap ")
    }

    show(){

    }

    search(){

    }
}