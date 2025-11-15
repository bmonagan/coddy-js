let numbers = [1, 2, 3, 4, 5];
let cn = numbers.concat([6,7,8]);
console.log(cn);
let joined = cn.join(",");
console.log(joined);
console.log(numbers.slice(0,3));
let spliced = numbers.splice(1,1,99);
console.log(numbers);