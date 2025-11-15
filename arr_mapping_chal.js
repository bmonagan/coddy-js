// Write code here
function transformArray(arr){
    arr = arr.filter(num => num >= 10);
    arr = arr.map(num => num * 2);
    return arr;
}