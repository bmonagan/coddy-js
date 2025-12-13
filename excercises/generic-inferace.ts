// TODO: Write your code here

// Create the generic Result interface

interface Result<T> {
    success: boolean,
    data: T
}


// Create the objects using the Result interface
const stringResult: Result<string> = {success: true, data: "Operation completed"}
const numberResult: Result<number> =  {success: true, data: 42}
const booleanResult: Result<boolean> = {success: false,data: false}
const arrayResult: Result<string[]> = {success: true, data: ["item1", "item2", "item3"]}


// Create the generic processResult function

function processResult<T>(result: Result<T>): string { 
    if (result.success === true) {
        return `Success: ${result.data}`;
    } else {
        return `Failed: ${result.data}`;
    }
}

// Print the required outputs

console.log(processResult(stringResult));
console.log(processResult(numberResult));
console.log(processResult(booleanResult));
console.log(processResult(arrayResult));
console.log(stringResult.data);