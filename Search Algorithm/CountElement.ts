function countElement(numbers: number[],
                      value: number){
    let count: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == value){
            count++
        }
    }
    return count;
}

console.log(countElement([1,2,3,4,4,5],4))