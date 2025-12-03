// TODO: Write your code here

// Create the sumAll function with rest parameters
function sumAll(...numbers: number[]): number{
    let total = 0;

    numbers.forEach(n => total += n);
    return total;
}


// Create the findMaximum function with rest parameters
function findMaximum(...numbers: number[]):number{
    let maxx = null;
    for (let n of numbers){
        if (n > maxx || maxx === null){
            maxx = n;
        }
    }
    return maxx;
}


// Create the concatenateStrings function with separator and rest parameters

function concatenateStrings(seperator: string, ...strings: string[]):string{
    const combined = strings.join(seperator);
    return combined;
}


// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));