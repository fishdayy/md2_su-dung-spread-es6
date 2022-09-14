function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else if (operator == '%') {
        throw RangeError('The operator must be an +,-,*,/')
    }
    return result;
}


console.log(calculator(3,9,'%'))
