var business = 850;
var minister = 650;
var sochib = 750;

if (business > minister) {
    if (business > sochib) {
        console.log('Business is bigger');
    } else {
        console.log('Sochib is bigger');
    }
} else {
    if (minister > sochib) {
        console.log('Minister is Bigger');
    } else {
        console.log('Sochib is Bigger');
    }
}