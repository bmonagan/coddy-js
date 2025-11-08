let age = parseInt(inp[0]); // Don't change this line
let height = parseInt(inp[1]); // Don't change this line
let has_adult = inp[2] === "true"; // Don't change this line
let result = "flflf"

if (age >= 12) {
    if (height > 150) {
        if (age < 15) {
            if (has_adult) {
                result = "You can ride with adult supervision!"
            } else {
                result = "Sorry, you need an adult with you"
            }
        } else {
            result = "You can ride by yourself!"
        }
    } else {
        result = "Sorry, you're not tall enough"
    }
} else {
    result = "Sorry, you're too young"
}

console.log(`${result}`)