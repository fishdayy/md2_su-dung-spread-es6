class Staff {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.name = email;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
let currenNameStaff = staff.getName();
console.log(currenNameStaff);
//# sourceMappingURL=classStaff.js.map