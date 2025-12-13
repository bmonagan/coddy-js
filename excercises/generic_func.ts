// Generic function from previous challenge
function wrapInObject<T>(item: T): { value: T } {
    return { value: item };
}

// TODO: Write your code here
// Create variables using explicit type arguments
const explicitString = wrapInObject<string>("TypeScript");
const explicitNumber = wrapInObject<number>(25);
const explicitBoolean = wrapInObject<boolean>(false);

// Create variables using type inference
const inferredString = wrapInObject("Generics");
const inferredNumber = wrapInObject(99);
const inferredBoolean = wrapInObject(true);


// Print the results

console.log(explicitString.value)
console.log(explicitNumber.value)
console.log(explicitBoolean.value)
console.log(inferredString.value)
console.log(inferredNumber.value)
console.log(inferredBoolean.value)