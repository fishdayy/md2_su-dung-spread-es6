import {Document} from "./Document";

export class Book extends Document {
    private _author: string;
    private _pages: number;

    constructor(id: number, imprint: string, releaseNumber: number, author: string, pages: number) {
        super(id, imprint, releaseNumber);
        this._author = author;
        this._pages = pages;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get pages(): number {
        return this._pages;
    }

    set pages(value: number) {
        this._pages = value;
    }
}