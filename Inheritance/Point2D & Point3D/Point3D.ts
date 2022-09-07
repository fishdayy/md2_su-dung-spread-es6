import {Point2D} from "./Point2D";

class Point3D extends Point2D {
    protected _z: number;


    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }


    get z(): number {
        return this._z;
    }

    set z(z: number) {
        this._z = z;
    }

    setXYZ(x:number, y:number, z:number){
        this._x = x;
        this._y = y;
        this._z = z;
    }

    getXYZ():object {
        return [this._x,this._y,this._z]
    }
}

let point3D: Point3D = new Point3D(1,2,3)
point3D.setXYZ(3,2,1)
console.log(point3D.getXYZ())