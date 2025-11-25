
let text = inp;
// Write your code below
let c = 0;

for (char of text){
    if (char.toLowerCase() == 'p'){
        c++;
    }
}
console.log(c)