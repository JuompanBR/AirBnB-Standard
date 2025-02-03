// inheritance in javascript
class Animal {

    constructor(name) {

        this.name = name;
    };

    speak() {

        console.log(`${this.name} makes a noise.`);
    }

    static bearChild(num1, num2) {
        
        console.log(num1 + num2);
    }
}

class Dog extends Animal {

    constructor(name, dogName) {

        super(name);
        this._dogName = dogName;
    }

    set dogName(name) {

        this._dogName = name;
    }

    get dogName() {
        
        return this._dogName;
    }

    bark() {
        
        this.speak();
        console.log("This is a dog who spoke");
    }

    bearChild(num1, num2) {

        Animal.bearChild(num1, num2);
    }

}

// create new dog
const dog = new Dog("Lucky");
dog.bark();
dog.bearChild(2, 2);