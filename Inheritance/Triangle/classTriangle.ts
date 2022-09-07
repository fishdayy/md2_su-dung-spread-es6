import {Shape} from "./classShape";


class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getArea(){
        return Math.sqrt((this.getPerimeter() / 2) * ((this.getPerimeter() / 2) - this.side1)* ((this.getPerimeter() / 2) - this.side2)* ((this.getPerimeter() / 2) - this.side3))
    }

    getPerimeter(){
        return (this.side1 + this.side2 + this.side3)
    }
}

let triangle: Triangle = new Triangle('tam giac','vang',6,6,6);
console.log(triangle.getPerimeter() +" "+ triangle.getArea())