enum Gender {
    MALE,
    FEMALE,
    OTHER
}

 class Employees{
    name: string ="";
    gender: Gender = Gender.OTHER;
    birthday: Date;
    email: string="";
    phone: string="";
    constructor(name: string,
                gender:Gender,
                birthday: Date,
                email: string,
                phone: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }

}
let employeeLists: Employees[] = [];

employeeLists.push(new Employees("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

function showEmployees(employees: Employees){
    console.log(employees)
}
employeeLists.forEach(showEmployees)

function removeEmployees(number: number){
    employeeLists.splice(number,1)
}
removeEmployees(0)
console.log(employeeLists)
