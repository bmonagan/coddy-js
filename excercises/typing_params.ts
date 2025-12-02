// TODO: Write your code here
// Create the add function with explicit return type annotation
function add(n1:number, n2:number): number {
    const n3 = n1 + n2;
    return n3;
}

// Create the getFullName function with explicit return type annotation

function getFullName(first: string, last: string): string {
    return `${first} ${last}`;
}
// Create the isEligible function with explicit return type annotation
function isEligible(age: number, license: boolean): boolean{
    if (age < 18 || !license){
        return false;
    }
    return true;
}

// Test the functions and print the results
// Call add with 15 and 27
console.log(add(15,27));
// Call getFullName with "John" and "Smith"
console.log(getFullName("John","Smith"));
// Call isEligible with 20 and true
console.log(isEligible(20,true));
// Call isEligible with 16 and true 
console.log(isEligible(16,true));