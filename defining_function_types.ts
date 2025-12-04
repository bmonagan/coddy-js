// TODO: Create type aliases here
// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (a:string) => string;
type NumberCalculator = (a:number, b: number) =>number;
type BooleanChecker = (a:string) => boolean;

// TODO: Implement the functions here
// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA

const toUpperCase: StringProcessor = (input) =>{
    return input.toUpperCase();
    
}
const addPrefix: StringProcessor = (input) => {
    return "Processed: " + input;
}
const divide: NumberCalculator = (a,b) => {
    return a / b;
}
const power: NumberCalculator = (a,b) => {
    return Math.pow(a,b);
}

const isEmpty: BooleanChecker = (input) => {
    return input.length === 0;
}

const startsWithA: BooleanChecker = (input) => {
    return input[0] === 'A';
}

// TODO: Test your functions and print the results
// Call each function with the specified values and print the results

console.log(toUpperCase('hello world'));
console.log(addPrefix('data'));
console.log(divide(20,4));
console.log(power(3,4));
console.log(isEmpty(""));
console.log(startsWithA("Apple"));