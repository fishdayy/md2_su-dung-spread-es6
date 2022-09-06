var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Employees = /** @class */ (function () {
    function Employees(name, gender, birthday, email, phone) {
        this.name = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phone = "";
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Employees;
}());
var employeeLists = [];
employeeLists.push(new Employees("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
function showEmployees(employees) {
    console.log(employees);
}
employeeLists.forEach(showEmployees);
function removeEmployees(number) {
    employeeLists.splice(number, 1);
}
removeEmployees(0);
console.log(employeeLists);
