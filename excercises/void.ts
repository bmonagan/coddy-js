// TODO: Write your code here
// Create the displayWelcome function that takes userName (string) and returns void
function displayWelcome(userName: string): void {
    console.log(`Welcome to our application, ${userName}!`);
}
// Create the logError function that takes errorMessage (string) and returns void  
function logError(errorMessage: string): void {
    console.log(`ERROR: ${errorMessage}`);
}
// Create the processData function that takes no parameters and returns void
function processData(): void{
    console.log("Processing data...");
    console.log("Data processing complete.");
}

// TODO: Call the functions in the specified order:
// 1. displayWelcome with "Alice"
displayWelcome('Alice');
// 2. processData with no arguments
processData();
// 3. logError with "Invalid input detected"
logError("Invalid input detected");
// 4. displayWelcome with "Bob"
displayWelcome("Bob");