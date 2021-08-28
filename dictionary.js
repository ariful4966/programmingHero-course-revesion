// const dictionary = {};
// dictionary[name] = 'Kothoti begum';

// dictionary[]

class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key]
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '017175663030')
phoneBook.add('Porimoni', '0171756669530')
phoneBook.add('Purnima', '017184663030')
console.log(phoneBook.dictionary);

const mahi = phoneBook.get('Mahi')
console.log(mahi);