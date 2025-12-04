import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const firstName: string = inputs[0];
const lastName: string = inputs[1];
const middleName: string = inputs[2];

// TODO: Write your code here
// Create the formatName function with proper type annotations
function formatName(first: string, last: string, middle?:string): string {
    let output = [];
    output.push(first);
    if (middle){
        output.push(middle);
    }
    output.push(last);
    return output.join(' ')
}

// Call the function and output the result
const result = formatName(firstName,lastName,middleName);
// Remember to handle the case where middleName is an empty string
console.log(result);