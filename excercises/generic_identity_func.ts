// TODO: Write your code here
// Create the generic function wrapInObject
function wrapInObject<T>(item: T): { value: T } {
  return { value: item };
}

// TODO: Create the test variables
// wrappedString, wrappedNumber, wrappedBoolean
let wrappedString = wrapInObject("Hello TypeScript");
let wrappedNumber = wrapInObject(42);
let wrappedBoolean = wrapInObject(true);

// Print the outputs
console.log(wrappedString.value);
console.log(wrappedNumber.value);
console.log(wrappedBoolean.value);
console.log(wrapInObject("Generic").value);
console.log(wrapInObject(100).value);