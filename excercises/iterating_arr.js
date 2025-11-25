let arr = inp.split(", "); // Don't change this line
// Write your code below
let new_arr = [];
for (let i = 0; i < arr.length;i++){
    if (arr[i].length > 5){
        new_arr.push(arr[i]);
    }

}
console.log(new_arr);