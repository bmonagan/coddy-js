let rainfall = parseInt(inp); // Don't change this line
let rainCondition = "unset";
// Type your code below
if (rainfall < 1){
    rainCondition = "Dry"

} else if (rainfall <= 10){
    rainCondition = "Light Rain"
} else if (rainfall <= 50){
    rainCondition = "Moderate Rain"
} else {
    rainCondition = "Heavy Rain"
}

// Don't change the line below
console.log(rainCondition);