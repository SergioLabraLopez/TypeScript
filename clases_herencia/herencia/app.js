var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello");
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(gender, languaje) {
        var _this = _super.call(this, gender) || this;
        _this.languaje = languaje;
        return _this;
    }
    Developer.prototype.sayHi = function () {
        console.log("Hi");
    };
    return Developer;
}(Person));
var person = new Person("male");
var dev = new Developer("female", ["Spanish"]);
// console.log(person.gender)
