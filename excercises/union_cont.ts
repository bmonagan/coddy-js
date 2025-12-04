import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstInput = inputs[0];
const secondInput = inputs[1];

// TODO: Write your code here
// Create the processData function with type guard
function processData(input: string|string[]): number{
    if (typeof input === 'string'){
        return input.length;
    }
    else {
        return input.reduce((total, str)=>total + str.length, 0); 
    }
}
// Create the formatMessage function with type guard
function formatMessage(content: number | boolean): string{
    if (typeof content === 'number') {
        return `Value: ${content}`;
    }
    else{
        return `Status: ${content}`;
    }
}
// Process the inputs according to the requirements
let processedFirstInput: string | string[];
if (firstInput.startsWith("[")) {
    processedFirstInput = JSON.parse(firstInput);
} else {
    processedFirstInput = firstInput;
}
console.log(processData(processedFirstInput));
// Call the functions and print the results
let fixedSecond;
if (secondInput === "true" || secondInput === "false"){
    fixedSecond = Boolean(secondInput);
}
else{
    fixedSecond = Number(secondInput);
}
console.log(formatMessage(fixedSecond));