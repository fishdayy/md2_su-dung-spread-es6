export class Employee {
    private _firstName: string;
    private _lastName: string;
    private _birthday: string;
    private _address: string;
    private _jobPosition: string;

    constructor(firstName?: string, lastName?: string, birthday?: string, address?: string, jobPosition?: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }


    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    set birthday(birthday: string) {
        this._birthday = birthday;
    }

    set address(address: string) {
        this._address = address;
    }

    set jobPosition(jobPosition: string) {
        this._jobPosition = jobPosition;
    }
}