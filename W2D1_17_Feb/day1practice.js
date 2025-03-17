/* variables */
/* let a = 9;
console.log(a); */

/* let radius = 5;
const pi=3.14;
let area = pi * radius * radius;
console.log(area); */




/* operators */
/* let num1 = 4;
let num2 = 2;
console.log(num1 + num2); */

/* let num=4;
let result = Math.pow(4,3);
console.log(result); */






/* conditional stmts */

/* let num=10;
if(num % 2=== 0)
    console.log("even");
else
    console.log("odd"); */

/* let num1=6;
let num2=4;
let num3=10;

if(num1>num2 && num1>num3)
    console.log("num1 is big");
else if(num2>num1 && num2>num3)
    console.log("num2 is big");
else
    console.log("num3 is big"); */




/* loops */

/* let i=1;
while(i<=5)
{
    console.log("hi",i);
    i++;
} */

/* let i=1;
do{
    console.log("hi",i);
    i++;
}while(i<=5); */


/* let i;
for(i=1;i<=5;i++)
{
    console.log("hi",i);
} */







/* string builtin functions */
let userName = "Sneharshitha";

console.log(userName.charAt(1));

console.log(userName.indexOf("e"));

console.log(userName.lastIndexOf("a"));

console.log(userName.toLowerCase());

console.log(userName.toUpperCase());

console.log(userName.length);

console.log(userName.repeat(3));

let phone = "123-456-7890"

console.log(phone.replaceAll("-", ""));

console.log(phone.padStart(15, "0"));

console.log(phone.padEnd(15, "0"));

/* for(let i=10;i>=1;i--)
{
    if(i%2===0)
        console.log(i);
   
} */

let even = []
let odd = []
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
        [even.unshift(i)]
    else if (i % 2 !== 0)
        [odd.unshift(i)]  
}
console.log(even)
console.log(odd)