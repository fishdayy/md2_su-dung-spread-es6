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

    editEmployee(list: number,
                 newFirstName?: string,
                 newLastName?: string,
                 newBirthday?:string,
                 newAddress?:string,
                 newJobPosition?:string){
        let newEmployee = EmployeeManager.ListEmployee[list -1];
        EmployeeManager.ListEmployee[list - 1].firstName = newFirstName;
        EmployeeManager.ListEmployee[list - 1].lastName = newLastName;
        EmployeeManager.ListEmployee[list - 1].birthday = newBirthday;
        EmployeeManager.ListEmployee[list - 1].address = newAddress;
        EmployeeManager.ListEmployee[list - 1].jobPosition = newJobPosition;
        return newEmployee
    }
}


let employee1 = new Employee('dinh','anh','',"ads","")
let employee2 = new Employee('dinhr','ansh')
let employee3 = new Employee('dinhg','anhy')

let manager1 = new EmployeeManager()
manager1.addEmployee(employee1)
manager1.addEmployee(employee2)
manager1.addEmployee(employee3)
manager1.removeEmployee(1)
manager1.editEmployee(1,'Dinh','Tuan Anh')
console.log(manager1.showEmployee())

