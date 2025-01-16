interface Person {
    name: string;
    age?: number;
    sayHello(): void;
}

const person: Person = {
    name: 'Jane',
    age: 2,
    sayHello: function() {},
}

const personTwo: Person = {
    name: 'Joe',
    // adult: true,
    sayHello: function() {},
}