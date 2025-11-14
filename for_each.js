let arr = inp.split(",").map(Number); // Don't change this line
let new_arr = [];
arr.forEach((n,index) => {
    if (n < 50 || n % 5 == 0){
        new_arr.push(n);
    }
});
console.log(new_arr)
// Write your code below