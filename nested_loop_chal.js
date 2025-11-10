let n = parseInt(inp); // Don't change this line

// Write your code below

for (let x = 1; x <= n; x++){
    for (let y = n; y >= 1; y--){
        if (x * y == n){
            console.log(x,y);
        }
    }
}