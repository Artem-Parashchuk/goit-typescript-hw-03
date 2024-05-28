class Key {
    constructor(private key: string){}

    getKey(): string{
        return this.key
    }
}

class MyHouse {
    constructor (private key: Key){ }

    openDoor(value: string) {
        if(value === this.key.getKey()) {
            console.log('Dor is open')
        } else {
            console.log('Key is wrong')
        }
    }

    comeIn(person: Person) {
        const userKey = person.getKey()
        if(userKey === this.key.getKey()){
            console.log('Come in')
        } else {
            console.log('Bye')
        }
    }
}

class Person {
    constructor(private key: Key) { }
    getKey() {
        return this.key.getKey()
    }
}

const key = new Key('KEY');

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};