import {Customer} from "./customer";

export class CustomerManagement extends Customer {

    listCustomer: Customer[] = [];

    add(customer: Customer){
        this.listCustomer.push(customer)
    }

    remove(idCard: number){
        this.listCustomer = this.listCustomer.filter((remove) => {
            return remove.idCard != idCard
        })
    }

    info(idCard: number){
        this.listCustomer.filter((search) => {
            return search.idCard = idCard
        })
    }

    totalRent(idCard: number){

    }
}