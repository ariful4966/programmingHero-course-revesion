var name = 'Kuddus'
function add(num1, num2) {
     var result = num1 + num2;
    console.log('name inside',name);
    function double(num){
        return num*2;
    }
    var total = double(result)
    return result;
}
console.log('outsite name', name);
var sum = add(13, 21);
console.log(sum);