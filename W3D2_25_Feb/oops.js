/* ******************* Inheritance ******************* */
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
/* class Vehicle {
    getType() {
        return "Vehicle";
    }
}

class Car extends Vehicle {
    carName: string = "Innova";
    getCarName() {
        return this.carName;
    }
}

let car = new Car();
console.log(car.getType());
console.log(car.getCarName());  */
//super keyword 
/* class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log(this.name);
    }
}

class Employee extends Person {
    empCode: number;
    constructor(name: string, code: number) {
        super(name);
        this.empCode = code;
    }
    show(): void {
        super.display();
    }
}

let emp = new Employee("Sam", 123);
emp.show();  */
/* ******************* Abstract classes ******************* */
var sample = /** @class */ (function () {
    function sample(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    sample.prototype.save = function () {
        console.log("The save method of the abstract class is executed.");
    };
    return sample;
}());
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test(property1, property2) {
        var _this = _super.call(this, property1, property2) || this;
        _this.property2 = property2;
        return _this;
    }
    test.prototype.demo = function () {
        console.log("The value of the property 3 is " + this.property2);
    };
    return test;
}(sample));
var test_obj = new test("TutorialsPont", 9999);
test_obj.demo();
test_obj.save();
