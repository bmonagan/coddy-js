// TODO: Write your code here
// Create the generic function getFirstElement
function getFirstElement<T>(arr: Array<T>): T | undefined { 
    return arr[0];
}

// Create the required arrays using Array<T> syntax
const stringArray: Array<string> = ["apple", "banana", "cherry"];
const numberArray: Array<number> = [10, 20, 30, 40];
const booleanArray: Array<boolean> = [true, false, true];
const emptyStringArray: Array<string> = [];

// Test the function and print the results
console.log(getFirstElement(stringArray));
console.log(getFirstElement(numberArray));
console.log(getFirstElement(booleanArray));
console.log(getFirstElement(emptyStringArray));
console.log(getFirstElement(["single"]));