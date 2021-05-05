function add(num1, num2) {
    let argument = [...arguments];
    // return num1 + num2 + arguments[2]
    let sum = 0;
    for (let i = 0; i < argument.length; i++) {
        const element = argument[i];
        sum += element
    }
    return sum;
}

const result = add(2, 3, 5, 7)
console.log(result);