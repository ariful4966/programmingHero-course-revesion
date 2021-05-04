//Falsy
// 0
// ""
//undefined
//null
//NaN
//false
//Truthy
let name = 0;
console.log(name);
if (name || name == 0) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}