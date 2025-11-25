let numbers = [40, 10, 30, 20, 50, 30, 10];
numbers.sort();
numbers.reverse();
let firstIndex = numbers.indexOf(30);
let lastIndex = numbers.lastIndexOf(10);

let hasHundred = numbers.includes(100);

console.log(numbers);
console.log(firstIndex);
console.log(lastIndex);
console.log(hasHundred);