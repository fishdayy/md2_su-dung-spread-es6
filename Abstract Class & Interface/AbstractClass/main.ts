import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";

let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound())
})