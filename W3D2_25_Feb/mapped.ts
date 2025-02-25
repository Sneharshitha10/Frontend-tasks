/* ******************************* Partial type ************************* */
/* type Person = {
    name: string;
    age: number;
};

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {
    name: "John",
};

console.log(partialPerson); */

/* ******************************* Readonly type ************************* */
/* type Person = {
    name: string;
    age: number;
};

type PartialPerson = Readonly<Person>;

const partialPerson: PartialPerson = {
    name: "John",
    age: 30
};

//partialPerson.name = "Doe"; 
console.log(partialPerson); */


/* ******************************* Required type ************************* */
/* type Person = {
    name : string;
    age : number;
};

type RequiredPerson = Required<Person>

const reqper : RequiredPerson = {
    name : "Sneha",
    age : 22,
};

console.log(reqper); */


/* *******************************  pick type ************************* */
/* type Animal={
    name : string;
    species : string;
    age : number;
}

type PickAnimal = Pick<Animal , 'name' | 'species'>

const pickanimal : PickAnimal = {
    name : "Lion",
    species : " Cat",
};

console.log(pickanimal); */


/* *******************************  omit type ************************* */
/* type Animal={
    name : string;
    species : string;
    age : number;
}

type OmitAnimal = Omit<Animal , 'name' | 'species'>

const omitanimal : OmitAnimal = {
    age : 10,
};

console.log(omitanimal); */


/* *******************************  custom boolean type ************************* */

/* type Person = {
    name: string;
    age: number;
  };
  
type Booleanify<T> = {
    [P in keyof T]: boolean;
};
  
const boolPerson: Booleanify<Person> = {
    name: true,
    age: true,
};
console.log(boolPerson);  */


/* *******************************  custom optional  type ************************* */

type Animal = {
    name: string;
    legs: number;
};

type CustomAnimal = {
    [key in keyof Animal]?: Animal[key];
};

let customAnimal: CustomAnimal = {
    name: "Dog",
    legs: 4,
};

console.log(customAnimal);

