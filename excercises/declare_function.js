// Write the function below
function summy(){
    let summ = 0;
    for (let i = 0; i<=10000; i++){
        summ += i;
    }
    console.log(summ);
}


let n = parseInt(inp); // Don't change this line

// Execute your function n times with a loop

for (let i = 1; i <= n; i++){
    summy();
}