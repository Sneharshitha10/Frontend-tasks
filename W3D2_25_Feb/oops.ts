/* ******************* Inheritance ******************* */

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

abstract class sample 
{
    
    property1: string;
    property2: number;  

    constructor(property1: string, property2: number) 
    {
       this.property1 = property1;
       this.property2 = property2;
    }
    
    abstract demo(): void;

    save(): void {
       console.log("The save method of the abstract class is executed.");
    }
 }
 class test extends sample 
 {
    property2: number;
    constructor(property1: string, property2: number)
    {
       super(property1,property2);
       this.property2 = property2;
    }
    demo(): void {
       console.log("The value of the property 3 is " + this.property2);
    }
 }
 let test_obj = new test("TutorialsPoint", 9999);
 test_obj.demo();
 test_obj.save();