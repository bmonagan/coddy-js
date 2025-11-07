let wind = parseInt(inp); // Don't change this line
let condition = "unset";
// Type your code below
if (wind < 8){
    condition = "Calm"
} else if (wind < 31){
    condition = "Breeze"
} else if ( wind <= 63){
    condition = "Gale"
} else {
    condition = "Storm"
}

// Don't change the line below
console.log(`condition = ${condition}`);