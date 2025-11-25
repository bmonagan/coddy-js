let arr = inp.split(", ").map(Number);
// Write your code beloww
let len = arr.length;
let mid = Math.floor(len /2);
if (len % 2 == 0){
    
    console.log(arr.slice(mid-1,mid+1));
     
} else {
    console.log(arr.slice(mid-1,mid+2));
    

}