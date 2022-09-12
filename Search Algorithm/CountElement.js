function countElement(numbers, value) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == value) {
            count++;
        }
    }
    return count;
}
console.log(countElement([1, 2, 3, 4, 4, 5], 4));
