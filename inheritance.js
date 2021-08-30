class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price

    }
    charging() {
        console.log('I am eating electorns ... they yummy');
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSMS() {
        console.log('I am send SMS to GM');
    }

}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }

}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price);
        this.isWifi = isWifi
    }
}

const samsu = new Phone('Samsung', 600000, '16GB');

console.log(samsu);

const ipad = new Tablet('Applie', 450000, true)
ipad.charging();
console.log(ipad);