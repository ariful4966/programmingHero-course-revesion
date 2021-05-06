const normalPerson = {
    fristName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.fristName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
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
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000)
// heroChargeBill(3000)
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonChargeBill(3000)
// friendlyPersonChargeBill(2000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40])
console.log(heroPerson.salary);