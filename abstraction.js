class Animal {
    constructor() {

    }
    talk() {
       throw new Error('You Must implement talk method')
    }
}

class Cat extends Animal {
    talk() {
        console.log('neow meow');
    }
}

class Dog extends Animal {
    talks() {
        console.log('Bark bark');
    }
    talk(){
        this.talks();
    }
}

const myCart = new Cat();
myCart.talk();
const myDog = new Dog();
myDog.talk();