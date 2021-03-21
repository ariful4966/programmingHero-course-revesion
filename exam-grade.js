var students = [['Ariful Islam', 80], ['Johirul Islam', 77], ['Azizul Islam', 88], ['Asia', 95], ['Aysha', 89], ['Rupa', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.length);

}

console.log('Avarage Grade: '+ (Avgmarks)/students.length);

if(avg < 60){
    console.log('Grade: F');
}else if(avg < 70){
    console.log('Grade: D');
}else if(avg < 80){
    console.log('Grade: C');
}else if(avg < 90){
    console.log('Grade: B');
}else if(avg < 100){
    console.log('Grade: A');
}