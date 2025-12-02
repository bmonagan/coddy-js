// TODO: Write your code here

// Create the calculateTax function
function calculateTax(price: number, rate = 0.05):number {
    return price * rate;
}


// Create the formatGreeting function
function formatGreeting(name: string, timeOfDay = "Hello"): string {
    return `${timeOfDay}, ${name}!`;
}

// Create the calculateShipping function
function calculateShipping(weight:number, distance: number, expedited = false): number {
    let shipping = (weight * 0.5) + (distance * 0.1);
    if (expedited){
        shipping *= 2;
    }
    return shipping;
}

// Test the functions and print results

console.log(calculateTax(100));
console.log(calculateTax(200, 0.08));
console.log(formatGreeting("Alice"));
console.log(formatGreeting("Bob", "Good morning"));
console.log(calculateShipping(5,100));
console.log(calculateShipping(3,50,true));