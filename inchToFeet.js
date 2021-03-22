var inch = 156;

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}
var senior = [156,288,300]
var nanaFeet = inchToFeet(senior[0]);
var naniFeet = inchToFeet(288);
console.log(nanaFeet);
console.log(naniFeet);
var dadiFeet = inchToFeet(300);
console.log(dadiFeet);
