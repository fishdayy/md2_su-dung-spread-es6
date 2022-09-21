export class Person {
    private _name: string;
    private _age: number;
    private _job: string;
    private _idCard: number;

    constructor(name: string, age: number, job: string, idCard: number) {
        this._name = name;
        this._age = age;
        this._job = job;
        this._idCard = idCard;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }

    get idCard(): number {
        return this._idCard;
    }

    set idCard(value: number) {
        this._idCard = value;
    }
}