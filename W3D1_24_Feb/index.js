//console.log("hello typescript");
//let a: number =  20;
//console.log(a);
/* ***************Built-in types *************** */
/* nlet num : number= 10;
console.log(num); */
/* let course : string= "Typescript";
console.log(course); */
/* let is_published : boolean = true;
console.log(is_published); */
/* ***************special types *************** */
/* let v: any = true;
v = "Sneha";
console.log(Math.round(v));  */
/* let val: unknown;
console.log(val);
val = true;
console.log(val); */
/* let variable1: never = null;
let variable2: never = 1;
let variable3: never = "geek";  */
/* ***************************  Array  ********************** */
/* let num : number[] = [1,2,3];
console.log(num); */
/* const names: string[] = [];
names.push("Dylan");
//names.push(3);
console.log(names); */
/* let name: readonly string[] = ["Dylan"];
name.push("Jack"); */
/* **************************  tuples  ****************************** */
/* let user : [number,string] = [1,"sneha"];
console.log(user); */
/* let users: [number, boolean, string];
users = [5, false, 'Coding God was here'];
users.push(10);
console.log(users); */
/* ****************************  Enum  ******************************** */
//const small = 1;
//const medium = 2;
//const large = 3;
/* const enum Size { Small = 1, Medium , Large}
const mySize = Size.Medium
console.log(mySize); */
/* ****************************  Function  ******************************** */
/* function calculate(income : number , year = 2022) : number
{
   if(year < 2022)
     return income * 2;
    return income * 3;
}
console.log(calculate(10000));  */
/* let employee : {
    readonly id : number,
    name : string
    retire : (date : Date) => void
} = {id : 1, name : "sneha", retire : (date : Date) => console.log(date)};
//employee.id = 2;
employee.retire(new Date());  */
/* ****************************  Union  ******************************** */
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
