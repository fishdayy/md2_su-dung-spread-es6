var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.name = email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
var currenNameStaff = staff.getName();
console.log(currenNameStaff);
