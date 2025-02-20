const a = [1,2,3,4,5];
const square = a.map((num) => num * num);
console.log(square);

const even = a.filter((num) => num % 2 === 0);
console.log(even);

const sum = a.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

a.forEach((num) => console.log(num * 2));

const fEven = a.find((num) => num % 2 === 0);
console.log(fEven);

const hasNeg = a.some((num) => num < 0);
console.log(hasNeg);

const allPos = a.every((num) => num > 0);
console.log(allPos)