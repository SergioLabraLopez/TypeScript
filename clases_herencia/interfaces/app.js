var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    Person.prototype.sayHi = function () {
        console.log("Hello");
    };
    return Person;
}());
