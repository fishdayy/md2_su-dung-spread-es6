export enum Room {
    A = 500,
    B = 300,
    C = 100
}

export class Hotel {
    private _room: Room

    constructor(room: Room) {
        this._room = room;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
    }
}