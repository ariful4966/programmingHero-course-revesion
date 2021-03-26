
var statement = 'Hello Alien Bhai Brother.'
function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var forAlieng = reverseString(statement)
console.log(forAlieng);

var fooVlog = reverseString('Ki Khawa ja khida lagse....')
console.log(fooVlog);