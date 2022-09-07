import {Square} from "./Square";
import {Colorable} from "./Colorable";

class ColorableSquare extends Square implements Colorable{
    howToColor(): string {
        return 'Color all four side.'
    }
}

let square1: ColorableSquare = new ColorableSquare('vuong',4);
console.log(square1.howToColor())