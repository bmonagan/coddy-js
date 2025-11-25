let num = parseInt(inp); // Don't change this line
console.log("Welcome to FizzBuzz!")
function fizzBuzz(num){
    if (num % 3 == 0){
        if (num % 7 == 0){
            console.log("FizzBuzz");
        }
        else{
            console.log("Fizz");
        }}
    else if (num % 7 == 0){
        console.log("Buzz");
    }
    else if(String(num).includes('3')){
        console.log("Almost Fizz")
    }
    else{
        console.log(num);
    }}
 

for (let i =1; i <= num; i++){
    fizzBuzz(i);
}