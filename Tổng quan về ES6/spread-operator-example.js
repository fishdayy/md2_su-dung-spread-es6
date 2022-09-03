// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
//
// const cars2 = ["NISSAN","TOYOTA"];
//
// const cars3 = [...cars1, ...cars2]
//
// console.log(cars3);

// const cars1 = {
//     Brand : 'BMW',
//     Color : 'RED'
// }
//
// const cars2 = {
//     Brand: 'Nissan',
//     Color: 'BLUE',
//     Year: 2004
// }
//
// const cars3 = {...cars1,...cars2};
// console.log(cars3)

// const car = 'audi';
// const a = [...car];
// console.log(a)

const numbers = [3,5,7,8,9];

const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);