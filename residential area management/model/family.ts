import {Person} from "./person";

export class Family {
    private _numberOfMember: number;
    private _apartmentNumber: number;
    private _infoMember: Person;

    constructor(numberOfMember: number, apartmentNumber: number, infoMember: Person) {
        this._numberOfMember = numberOfMember;
        this._apartmentNumber = apartmentNumber;
        this._infoMember = infoMember;
    }


    get numberOfMember(): number {
        return this._numberOfMember;
    }

    set numberOfMember(value: number) {
        this._numberOfMember = value;
    }

    get apartmentNumber(): number {
        return this._apartmentNumber;
    }

    set apartmentNumber(value: number) {
        this._apartmentNumber = value;
    }

    get infoMember(): Person {
        return this._infoMember;
    }

    set infoMember(value: Person) {
        this._infoMember = value;
    }
}