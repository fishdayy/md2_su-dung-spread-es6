import {Cadres} from "./Cadres";
import {Gender} from "./Cadres";

export class Worker extends Cadres {
    private _rank: number;

    constructor(fullName: string, age: number, gender: Gender, address: string, rank: number) {
        super(fullName, age, gender, address);
        this._rank = rank;
    }

    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }
}