const normalPerson = {
    fristName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.fristName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary= this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}
// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000)
heroChargeBill(3000)
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(3000)
friendlyPersonChargeBill(2000);
console.log(friendlyPerson.salary);