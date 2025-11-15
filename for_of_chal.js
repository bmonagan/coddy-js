// Write code here
function countDigits(string){
    let count = 0;
    for (char of string){
        if ('0123456789'.includes(char)){
            count += 1;
        }
    }
    return count;
}