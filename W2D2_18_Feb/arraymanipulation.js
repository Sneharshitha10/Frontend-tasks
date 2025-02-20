const fruits=["mango","banana","apple","papaya","muskmelon"]

console.log(fruits.length);

console.log(fruits);

console.log(fruits.toString());

console.log(fruits.at(3));

console.log(fruits.join(" # "));

console.log(fruits.push("kiwi"));  //returns length
console.log(fruits);

console.log(fruits.pop());       //returns poped element
console.log(fruits);

console.log(fruits.shift());     //returns first element poped
console.log(fruits);

console.log(fruits.unshift("avocado"));    //length
console.log(fruits);

console.log("*******************************************");

const girls = ["sneha","alex"];
const boys = ["karthik","shiva"];
const children = girls.concat(boys);
console.log(children);

console.log("*******************************************");

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.copyWithin(2, 0));

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit1.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruit1);
console.log(fruit1.splice(2, 2, "Lemon", "Kiwi"));
console.log(fruit1);

console.log("*******************************************");

const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1));

console.log("*******************************************");

const fruit2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruit2.slice(1));
console.log(fruit2.slice(1,3));


