var student = { id: 121, phone: 017000000000000, name: 'Abir' }
var student2 = { id: 131, phone: 01675734444433, name: 'Mahi' }

var phonePropName = 'phone';
var phoneNo1 = student.phone;
var phoneNo2 = student['phone'];
var phoneNo3 = student[phonePropName]

student2.phone = 5899902;
student2['phone']= 79499302;
student2.cinema = 'Ogni22'

var phone = student[phonePropName];
console.log(phone);
console.log(student2);