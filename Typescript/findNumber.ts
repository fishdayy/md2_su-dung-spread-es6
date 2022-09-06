let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
let findNumbers: number[] = [];
for (let i = 0; i < 11; i++) {

    if(numbers.indexOf(i,0) == -1){

        findNumbers.push(i)
    }
}
console.log(findNumbers)