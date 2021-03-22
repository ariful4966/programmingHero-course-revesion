function isLeapYear(year) {
    // const remainder = year % 4;

    // if (remainder == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

const check2000 = isLeapYear(2000)
console.log(check2000);