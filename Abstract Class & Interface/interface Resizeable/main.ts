import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Resizeable} from "./Resizeable";

class ResizeableCircle extends Circle implements Resizeable{
    resize(percent: number): number {
        this.radius = Math.floor(Math.random() * 100)
        return this.radius
    }
}

class ResizeableRectangle extends Rectangle implements Resizeable{
    resize(percent: number): number {
        this.width = Math.floor(Math.random() * 100)
        this.width = Math.floor(Math.random() * 100)
        return this.calculatePerimeter()
    }
}

class ResizeableSquare extends Square implements Resizeable{
    resize(percent: number): number {
        this.width = Math.floor(Math.random() * 100)
        return this.width
    }
}

let resizeableCircle1: ResizeableCircle = new ResizeableCircle('tron',5)
console.log(resizeableCircle1.resize(6))

let resizeableRectangle1: ResizeableRectangle = new ResizeableRectangle(2,5,'chu nhat')
console.log(resizeableRectangle1.resize(5))

let resizeableSquare1: ResizeableSquare = new ResizeableSquare('vuong',3)
console.log(resizeableSquare1.resize(2))
