enum Gender{
    Male,
    Female,
    Orther
}

class Employee{
    name: string =""
    gender: Gender = Gender.Orther;
    birthday?: Date;
    email: string ="";
    phone: string = "";

    constructor(name:string, gender: Gender, birthday: Date, email: string, phone: string) {
        this.name =  name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
}

let employeeList: Employee[] = [];
employeeList.push(new Employee("Nguyen Van A", Gender.Male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

employeeList.push(new Employee("Tran Thi A", Gender.Female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));

employeeList.push(new Employee("Huynh An Nhien", Gender.Orther, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

function showEmployee(employee: Employee){
    console.log(employee)
}

employeeList.forEach(showEmployee)