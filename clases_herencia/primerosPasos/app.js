var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
        this.age = 20;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello");
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("Male");
person.setAge(24);
console.log(person.getAge());
// Person.prototype.sayHello = function () {
//     console.log("Hello")
// }
