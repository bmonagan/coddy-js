let arr1 = inp[0].split(", ").map(Number);
let arr2 = inp[1].split(", ").map(Number);
// Write your code below
let newarr = [];
for (num of arr1){
    if (arr2.indexOf(num) == -1){
        newarr.push(num);
    }

}
console.log(newarr)