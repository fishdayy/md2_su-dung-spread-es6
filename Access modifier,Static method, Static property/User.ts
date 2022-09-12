enum Role {
    admin = 1,
    user
}

class User{
    private _name:string = "";
    private _email:string = "";
    public role: Role = Role.user;
    constructor(name:string,email:string,role: Role) {
        this._name = name;
        this._email = email;
        this.role = role
    }

    getInfo(){
        return `name: ${this._name}, email: ${this._email},role: ${this.isAdmin()} `
    }

    isAdmin(){
        if (this.role == 1){
            return "admin"
        }
        if (this.role == 2){
            return "user"
        }
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }
}

let user = new User('tuan anh','tuananh@gmail.com',2)

console.log(user.getInfo())