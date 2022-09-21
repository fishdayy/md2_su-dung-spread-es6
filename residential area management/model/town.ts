import {Family} from "./family";

export class Town {
    private _numberOfFamily: number;
    private _infoFamily: Family;

    constructor(numberOfFamily: number, infoFamily: Family) {
        this._numberOfFamily = numberOfFamily;
        this._infoFamily = infoFamily;
    }

    get numberOfFamily(): number {
        return this._numberOfFamily;
    }

    set numberOfFamily(value: number) {
        this._numberOfFamily = value;
    }

    get infoFamily(): Family {
        return this._infoFamily;
    }

    set infoFamily(value: Family) {
        this._infoFamily = value;
    }
}