import {Document} from "./Document";

export class Newspaper extends Document {
    private _releaseMonth: number;

    constructor(id: number, imprint: string, releaseNumber: number, releaseMonth: number) {
        super(id, imprint, releaseNumber);
        this._releaseMonth = releaseMonth;
    }

    get releaseMonth(): number {
        return this._releaseMonth;
    }

    set releaseMonth(value: number) {
        this._releaseMonth = value;
    }
}