const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Maannaaaaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'DeepJol' },
];

const names = students.map(obj => obj.name);
const ids = students.map(obj => obj.id);
const bigger = students.filter(obj => obj.id > 40);
const bigger1 = students.find(obj => obj.id > 40);
// let names= [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     names.push(element.name)
// }
console.log(bigger1);