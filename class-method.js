class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power
    }

    getPower() {
        if (this.power) {
            return this.power
        } else {
            return 'I Have No Power'
        }
    }
    goForGrocery(budget) {
        if (this.power && budget > 500) {
            console.log(this.getPower());
        }
        return 'Price is too high, i can not buy'
    }
}

const catman = new Hero('Catman', 'Deep khamci')
// console.log(catman.power);
console.log(catman.goForGrocery(1050));