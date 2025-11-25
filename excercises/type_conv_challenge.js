let length = inp[0] // Don't change this line
let width = inp[1] // Don't change this line

// Write code below
length = parseFloat(length);
width = parseFloat(width);

let area = length * width
let perimeter = (length + width) * 2

console.log(`The area is: ${area} and the perimeter is: ${perimeter}`)