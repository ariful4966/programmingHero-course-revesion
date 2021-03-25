var numbers = [45, 81, 63, 98, 56, 35, 23];

function getArraySum(num) {
    var sum = 0;

    for (var i = 0; i < num.length; i++) {
        var element = num[i];
        sum += element

    }
    return sum
}

var total = getArraySum(numbers)
console.log('Total of the Numbers: ',total );