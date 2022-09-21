import {Customer} from "./customer";

export interface iCustomerManagement {
    add(customer: Customer)
    remove(idCard: number)
    info(idCard: number)
}