import {Person} from "../model/person";

export class PersonManagement extends Person {
    listPerson: Person[] = [];
    input = require('readline-sync');

    add(){
        let name = this.input.question("Ten: ");
        let age = +this.input.question("Tuoi: ");
        let job = this.input.question("Nghe nghiep: ");
        let idCard = +this.input.question("So CMND: ");
        let person = new Person(name,age,job,idCard)
        this.listPerson.push(person)
    }

    show(){
        console.log(this.listPerson)
    }

    search(){
        let idCard = +this.input.question("Nhap CMND nguoi can tim: ");
        this.listPerson.filter((search)=>{
            if (search.idCard === idCard) {
                console.log(search)
            } else {
                console.log('not found')
            }
        })
    }

    remove(){
        let idCard = +this.input.question("Nhap CMND nguoi can xoa: ");
        this.listPerson.filter((remove)=>{
            console.log(remove.idCard != idCard)
        })
    }
}