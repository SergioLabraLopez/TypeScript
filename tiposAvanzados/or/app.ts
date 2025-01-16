type PersonName = {
    name: string;
}

type PersonAge = {
    age: number;
}

type PersonSayHello = {
    sayHello(): void;
}

type Person = PersonName| PersonAge | PersonSayHello;

const peerson: Person = {
    name: "John",
    age: 34,
    sayHello: function () {
        console.log("hola")
    }
}

const peersonTwo: Person = {
    name: "John",
    age: 34,
    
}