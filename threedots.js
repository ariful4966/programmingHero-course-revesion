const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 42, 29];

const allAgese = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

const business = 650;
const minster = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
const maximum = Math.max(...takaPoisa);
// const maximum = Math.max(business, minster, sochib);
console.log(maximum);