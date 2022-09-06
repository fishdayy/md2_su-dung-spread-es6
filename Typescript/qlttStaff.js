var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Orther"] = 2] = "Orther";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phone) {
        this.name = "";
        this.gender = Gender.Orther;
        this.email = "";
        this.phone = "";
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Van A", Gender.Male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Tran Thi A", Gender.Female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.push(new Employee("Huynh An Nhien", Gender.Orther, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
