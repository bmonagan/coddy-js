// TODO: Convert the regular function to arrow function and create the additional arrow functions

// TODO: Create the subtract arrow function with type annotations
const subtract = (a: number, b: number): number =>{
    return a - b;
}


// TODO: Create the createMessage arrow function with type annotations

const createMessage = (text: string): string =>{
    return `Message: ${text}`;
}

// TODO: Create the isPositive arrow function with type annotations
const isPositive = (num: number): boolean =>{
    return num >= 0;
}

// TODO: Test your arrow functions and print the results 

console.log(subtract(10,3));
console.log(createMessage("Hello World"));
console.log(isPositive(-5));
console.log(isPositive(8));