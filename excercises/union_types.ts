import * as fs from "fs";

// Read inputs
const stdinBuffer: Buffer = fs.readFileSync(0);
const inputs: string[] = stdinBuffer.toString().trim().split('\n');
const input1 = inputs[0];
const input2 = inputs[1];
const input3 = inputs[2];

// Convert inputs to appropriate types
const firstInput = isNaN(Number(input1)) ? input1 : Number(input1);
const secondInput = input2 === "true" ? true : input2 === "false" ? false : input2;
const thirdInput = isNaN(Number(input3)) ? input3 : Number(input3);

// TODO: Write your code here
// Create the three functions: printId, processValue, and formatOutput
function printId(id: string | number): void {
    console.log(id);
}
function processValue(data: boolean | string): boolean| string{
    return data;
}
function formatOutput(input: number | string): string {
    // 1. Check if it's already a number
    if (typeof input === 'number') {
        return `Number ${input}`;
    }

    // 2. If it's a string, attempt to convert it to a number
    if (typeof input === 'string') {
        // Use the Number() constructor to attempt conversion
        const numericValue = Number(input);

        // 3. Validate the conversion: check if the result is a finite number
        // (i.e., it's not NaN, Infinity, or -Infinity, which happens if the string is garbage)
        if (Number.isFinite(numericValue)) {
            // It was a valid number string!
            return `Number: ${numericValue}`;
        }
        
        // If the string conversion failed (e.g., input was 'hello'), 
        // proceed as regular text.
        return 'Text: ' + input;
    }
    
    // In a real-world scenario, you might add a final catch for other types.
    // For this specific signature (number | string), the code above is sufficient.
    return `Unrecognized Input: ${input}`;
}
// TODO: Call the functions with the appropriate inputs and handle outputs
printId(input1);
console.log(processValue(input2));
console.log(formatOutput(input3));