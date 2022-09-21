import {Customer} from "../model/customer";
import {iCustomerManagement} from "../model/iCustomerManagement";

export class CustomerManagement implements iCustomerManagement {

    listCustomer: Customer[] = [];
    input = require('readline-sync');

    add() {
        let name = this.input.question("Ten: ");
        let age = +this.input.question("Tuoi: ");
        let idCard = +this.input.question("So CMND: ")
        let timeToRent = +this.input.question("So ngay thue: ")
        let room = this.input.question("Phong hang: ")
        let customer: Customer = new Customer(name,age,idCard,timeToRent,room)
        this.listCustomer.push(customer)
    }

    remove() {
        let id = +this.input.question("nhap so CMND: ")
        this.listCustomer = this.listCustomer.filter((remove) => {
            console.log(remove.idCard != id)
        })
    }

    info() {
        let id = +this.input.question("nhap so CMND: ")
        this.listCustomer.filter((search) => {
            if (search.idCard === id) {
                console.log(search)
            } else {
                console.log('not found')
            }
        })
    }

    show() {
        console.log(this.listCustomer)
    }

    totalRent() {
        let id = +this.input.question("nhap so CMND: ")
        return this.listCustomer.forEach((item) => {
            if (item.idCard == id) {
                console.log(item.timeToRent * item.room)
            }
        })
    }
}

