
export class Person {
    private _idPerson: number;
    private _namePerson: string;
    private _agePerson: number;
    private _districtPerson: string;

    constructor(idPerson: number, namePerson: string, agePerson: number, districtPerson: string) {
        this._idPerson = idPerson;
        this._namePerson = namePerson;
        this._agePerson = agePerson;
        this._districtPerson = districtPerson;
    }

    get idPerson(): number {
        return this._idPerson;
    }

    set idPerson(value: number) {
        this._idPerson = value;
    }

    get namePerson(): string {
        return this._namePerson;
    }

    set namePerson(value: string) {
        this._namePerson = value;
    }

    get agePerson(): number {
        return this._agePerson;
    }

    set agePerson(value: number) {
        this._agePerson = value;
    }

    get districtPerson(): string {
        return this._districtPerson;
    }

    set districtPerson(value: string) {
        this._districtPerson = value;
    }
}