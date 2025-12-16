// TODO: Write your code here
// Create the throwError function with never return type
function throwError(message:string): never { 
    throw new Error(message);
}
// Create the handleOperation function with number return type
function handleOperation(operation:string, value: number): number { 
    if (operation === "double") {
        return value * 2;
    }
    else if (operation === "half") { 
        return value / 2;
    }
    else { 
        throwError(`Invalid operation: ${operation}`);
    }
}

// Test the functions with try-catch blocks
try {
    console.log(handleOperation("double", 5));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("half", 8));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("triple", 3));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("double", 15));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}

try {
    console.log(handleOperation("half", 20));
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}