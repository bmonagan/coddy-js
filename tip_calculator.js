let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

// Type your code below

console.log("Bill Split Calculator")
let total = parseFloat(billAmount * (1 + (tipPercentage / 100)))
console.log(`Total (including tip): $${total}`)
let inv_total = total / numPeople
console.log(`Each person pays: $${inv_total}`)