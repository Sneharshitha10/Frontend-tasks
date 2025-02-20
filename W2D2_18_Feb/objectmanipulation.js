const person1={
    firstName : "Sneha",
    lastName : "Varma",
    age : "22"
};

const person2 = {
    firstName: "Karthik",
    lastName: "Varma"

};

console.log(Object.assign(person1,person2));

console.log("*********************************************");

const person = {
    firstName : "Sneha",
    lastName : "varma",
    age : 22,
    eyeColor : "black"
  };
  
console.log(Object.entries(person));

console.log("*********************************************");

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];
  
console.log(Object.fromEntries(fruits));

console.log("*********************************************");

const persons = {
    firstName : "Sneha",
    lastName : "varma",
    age : 22,
    eyeColor : "black"
};
  
console.log(Object.values(persons));
console.log(Object.keys(persons));



