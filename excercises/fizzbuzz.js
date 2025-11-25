let num = parseInt(inp); // Don't change this line
console.log("Welcome to FizzBuzz!")
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
else{
    console.log(num);
}
 
