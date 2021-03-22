// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10

function factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial
}

let result = factorial(10)
console.log(result);