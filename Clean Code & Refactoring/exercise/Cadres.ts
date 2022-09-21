export enum Gender {
    Male,
    Female,
    Other
}

export class Cadres {
    private _fullName: string = "";
    private _age: number = 0;
    private _gender: Gender = Gender.Other;
    private _address: string = "";

    constructor(fullName: string, age: number, gender: Gender,address: string) {
        this._fullName = fullName;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(fullName: string) {
        this._fullName = fullName;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(gender: Gender) {
        this._gender = gender;
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }
}