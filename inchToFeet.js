const inch = 156;

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const senior = [156,288,300]

const nanaFeet = inchToFeet(senior[0]);
const naniFeet = inchToFeet(288);
console.log(nanaFeet);
console.log(naniFeet);
const dadiFeet = inchToFeet(300);
console.log(dadiFeet);
