import {Family} from "../model/family";

export class FamilyManagement extends Family {
    input = require('readline-sync');
    listFamily: Family[] = [];

    add(){
        let numberOfMember = this.input.question("Nhap so thanh vien: ");
        let apartmentNumber = this.input.question("Nhap so nha: ");
        let infoMember = this.input.question("nhap ten nguoi can xem: ");
        let family = new Family(numberOfMember,apartmentNumber,infoMember);
        this.listFamily.push(family)
    }

    show(){
        console.log(this.listFamily)
    }

    search(){
        let infoMember = this.input.question("Nhap ten nguoi muon tim: ");
        this.listFamily.filter((search)=>{
            if(search.apartmentNumber == infoMember){
                console.log(search)
            }else {
                console.log("not found")
            }
        })
    }
}