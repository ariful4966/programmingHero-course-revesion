function doSomthing(){
    console.log(3333);
}
console.log(2222);
setTimeout(doSomthing, 4000);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);

// setTimeout(()=>{
//     console.log('Lazy and Waiting for you');
// }, 5000)

setInterval(() => {
    console.log('doing it again');
}, 1000);