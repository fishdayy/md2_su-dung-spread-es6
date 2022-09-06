import {Employee} from "./Employee";

class EmployeeManager{
    static ListEmployee: Employee[] = [];

    constructor() {
    }

    addEmployee(employee: Employee): void{
        EmployeeManager.ListEmployee.push(employee)
    }

    showEmployee(){
        return EmployeeManager.ListEmployee;
    }

    removeEmployee(list: number){
        EmployeeManager.ListEmployee.splice(list -1,1)
    }



    editEmployee(list: number){
        let newEmployee =
        EmployeeManager.ListEmployee[list - 1] =
    }
}


let employee1 = new Employee('dinh','anh','',"ads","")
let employee2 = new Employee('dinhr','ansh')
let employee3 = new Employee('dinhg','anhy')

let manager1 = new EmployeeManager()
manager1.addEmployee(employee1)
manager1.addEmployee(employee2)
manager1.addEmployee(employee3)
console.log(manager1.showEmployee())

