// console.log(12);

function evenify(num) {
    let result;
    if (num % 2 == 0) {
        result = num
    } else {
        result = num * 2
    }
    return result

}
var result = evenify(13);
var square = result * result;
console.log('square', square);
console.log('result', result);
function evenify_all(nums) {

    var even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var reusult = evenify(num)
        even_array.push(result)
    }
    return even_array

}
var nums = [5, 12, 89, 45, 18, 8];
var nums_array = evenify_all(nums)
console.log(nums_array);


friends_age = [13, 17, 19, 20, 18];
// evenify_all(friends_age)