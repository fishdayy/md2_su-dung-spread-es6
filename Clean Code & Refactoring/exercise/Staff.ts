import {Cadres} from "./Cadres";
import {Gender} from "./Cadres";

export class Staff extends Cadres {
    private _work: string;

    constructor(fullName: string, age: number, gender: Gender, address: string, work: string) {
        super(fullName, age, gender, address);
        this._work = work;
    }


    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}