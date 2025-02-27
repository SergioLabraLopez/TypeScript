class Person {
    protected gender: string;
    protected languaje: string[];

    constructor (gender: string){
        this.gender = gender;
    }

    sayHello() {
        console.log("Hello")
    }
}

class Developer extends Person {
    lenguajes: string[];

    constructor(gender: string, languaje: string[]) {
        super(gender);
        this.languaje = languaje
    }

    sayHi(){
        console.log("Hi");
    }
}

const person = new Person("male");

const dev = new Developer("female", ["Spanish"]);

// console.log(person.gender)