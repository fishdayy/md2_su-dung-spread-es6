import {Customer} from "./customer";

export interface Management {
    add(customer: Customer)
    remove(idCard: number)
    info(idCard: number)
}