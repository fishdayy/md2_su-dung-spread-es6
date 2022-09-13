export class Document {
    private _id: number;
    private _imprint: string;
    private _releaseNumber: number;


    constructor(id: number, imprint: string, releaseNumber: number) {
        this._id = id;
        this._imprint = imprint;
        this._releaseNumber = releaseNumber;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get imprint(): string {
        return this._imprint;
    }

    set imprint(imprint: string) {
        this._imprint = imprint;
    }

    get releaseNumber(): number {
        return this._releaseNumber;
    }

    set releaseNumber(releaseNumber: number) {
        this._releaseNumber = releaseNumber;
    }
}