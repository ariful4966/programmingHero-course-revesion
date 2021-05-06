const normalPerson = {
    fristName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.fristName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary= this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary)