let num1 = parseInt(inp[0]); // Don't change this line
let num2 = parseInt(inp[1]); // Don't change this line
// Type your code below

function sumRange(start,end){
    let summ = 0;
    for (let i = start; i <= end; i++){
        summ += i;
    }
    console.log(`The sum of numbers from ${start} to ${end} is ${summ}.`);
}

sumRange(num1,num2);