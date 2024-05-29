class Key {
    private signature: number;
  
    constructor(signature: number) {
      this.signature = signature !== undefined ? signature : Math.random();
    }
  
    public getSignature(): number {
      return this.signature;
    }
  }

class Person {
    constructor(private key: Key) { }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(key: Key) {
      this.door = false; // Двері закриті за замовчуванням
      this.key = key;
      this.tenants = [];
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Open!');
      } else {
        console.log("Door is closed!");
      }
    }
  
    abstract openDoor(key: Key): void;
  }


  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Door is opened successfully.");
      } else {
        console.log("Dor is closed");
      }
    }
  }

const key = new Key(12);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };