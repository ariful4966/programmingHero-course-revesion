const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result)
// }
// const square = element => element * element;
// const square = x => x * x;

// const result = numbers.map(function square(element) {
//     return element * element;
// })

// const result2 = numbers.map(x => x * x)

// console.log(result2);


// const bigger = numbers.filter(x => x > 5)
const bigger = numbers.find(x => x > 5)

console.log(bigger);