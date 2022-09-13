import {Document} from "./Document";

export class Magazine extends Document {
    private _issueNumber: number;
    private _releaseMonth: number;

    constructor(id: number, imprint: string, releaseNumber: number, issueNumber: number, releaseMonth: number) {
        super(id, imprint, releaseNumber);
        this._issueNumber = issueNumber;
        this._releaseMonth = releaseMonth;
    }

    get issueNumber(): number {
        return this._issueNumber;
    }

    set issueNumber(value: number) {
        this._issueNumber = value;
    }

    get releaseMonth(): number {
        return this._releaseMonth;
    }

    set releaseMonth(value: number) {
        this._releaseMonth = value;
    }
}