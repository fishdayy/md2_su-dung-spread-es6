import {Document} from "./Document";

export class Newspaper extends Document {
    private _releaseDay: number;

    constructor(id: number, imprint: string, releaseNumber: number, releaseDay: number) {
        super(id, imprint, releaseNumber);
        this._releaseDay = releaseDay;
    }

    get releaseDay(): number {
        return this._releaseDay;
    }

    set releaseDay(releaseDay: number) {
        this._releaseDay = releaseDay;
    }
}