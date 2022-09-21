import {Room} from "./hotel";

export class Customer {
    private _name: string;
    private _age: number;
    private _idCard: number;
    private _timeToRent: number;
    private _room: Room;

    constructor(name: string, age: number, idCard: number,timeToRent: number,room: Room) {
        this._name = name;
        this._age = age;
        this._idCard = idCard;
        this._timeToRent = timeToRent;
        this._room = room
    }

    get timeToRent(): number {
        return this._timeToRent;
    }

    set timeToRent(value: number) {
        this._timeToRent = value;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
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

    get idCard(): number {
        return this._idCard;
    }

    set idCard(value: number) {
        this._idCard = value;
    }
}