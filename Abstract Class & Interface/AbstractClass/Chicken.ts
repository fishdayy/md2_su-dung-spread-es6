import {Animal} from "./Animal";

export class Chicken extends Animal {
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }
}