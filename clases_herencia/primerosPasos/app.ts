class Person {
    public gender: string
    private age: number
    static height: number

    constructor(gender: string) {
        this.gender = gender;
        this.age = 20;
    }

    sayHello() {
        console.log("Hello")
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge(){
        return this.age;
    }

    static seyHi(){
        console.log("Hi")
    }
}

const person = new Person("Male");
person.setAge(24);
console.log(person.getAge())
// Person.prototype.sayHello = function () {
//     console.log("Hello")
// }