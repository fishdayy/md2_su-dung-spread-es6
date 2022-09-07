import {Circle} from "./Circle";

class Cylinder extends Circle {

    private _height: number;

    constructor(radius: number, color: string,height: number) {
        super(radius, color);
        this._height = height;
    }

    volumeCylinder(){
        return this.areaCircle()*this._height
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
}

let cylinder: Cylinder = new Cylinder(2,"blue",2)
console.log(cylinder.volumeCylinder())