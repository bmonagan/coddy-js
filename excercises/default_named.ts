// TODO: Import both functions here from calculator.js
import calculate, {square}  from "./calculator.js";


// Test
console.log(calculate(10, 5, '+')); // Should output 15
console.log(square(4));             // Should output 16

________________________________________________________
function calculate(a, b, operation) {
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
}

// TODO: Export square function as named here
export function square(x) {
    return x * x;
}

// TODO: Export calculate function as default here
export default calculate;

