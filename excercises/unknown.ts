// Create the userInput variable with unknown type
let userInput: unknown = "TypeScript";

// TODO: Write your code here
if (typeof userInput ===  "string"){
    console.log(userInput.toUpperCase());
}
else {
    console.log("Not a string")
}
// Use typeof to check if userInput is a string
// If it's a string, print the uppercase version
// If it's not a string, print "Not a string"