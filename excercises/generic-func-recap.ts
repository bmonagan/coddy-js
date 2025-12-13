// TODO: Write your code here
// Create the generic makePair function with type parameters T and U
// The function should accept two parameters and return a tuple

function makePair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
// TODO: Test your function by creating the required variables
// stringNumberPair, booleanStringPair, numberBooleanPair
const stringNumberPair = makePair("Hello",42);
const booleanStringPair = makePair(true , "World");
const numberBooleanPair = makePair(100, false);

// TODO: Use destructuring to extract values from tuples
// Destructure stringNumberPair and booleanStringPair as specified
const [text, num] = stringNumberPair;
const [flag, message] = booleanStringPair;

// TODO: Print all the required outputs
// Print text, num, flag, message, and the other required values

console.log(text);
console.log(num);
console.log(flag);
console.log(message);
console.log(numberBooleanPair[0]);
console.log(numberBooleanPair[1]);
console.log(makePair("TypeScript", 2024)[0]);
console.log(makePair(99,"bottles")[1]);