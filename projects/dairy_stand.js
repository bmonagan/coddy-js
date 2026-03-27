const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n');

// Task 1: Update product labels
const labelText = input[0];
const oldTerm = input[1];
const newTerm = input[2];

// Replace all occurrences of old term with new term (case-insensitive)
const regex = new RegExp(oldTerm, 'gi');
const updatedLabel = labelText.replace(regex, newTerm);

// Task 2: Count pairs that sum to target weight
const weights = input[3].split(' ').map(Number);
const target = parseInt(input[4]);

let pairCount = 0;
for (let i = 0; i < weights.length; i++) {
    for (let j = i + 1; j < weights.length; j++) {
        if (weights[i] + weights[j] === target) {
            pairCount++;
        }
    }
}

// Task 3: Create alternating display sign
const product1 = input[5];
const product2 = input[6];

let interleavedSign = '';
const maxLength = Math.max(product1.length, product2.length);

for (let i = 0; i < maxLength; i++) {
    if (i < product1.length) {
        interleavedSign += product1[i];
    }
    if (i < product2.length) {
        interleavedSign += product2[i];
    }
}

// Output results
console.log(updatedLabel);
console.log(pairCount);
console.log(interleavedSign);