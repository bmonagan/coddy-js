function chainMaster(numbers) {
    // Write your code here
    const transformedArray = numbers
    .filter(number => number % 3 === 0)
    .map(number => number * 2)
    .sort((a,b) => b-a)

    const sum = transformedArray.reduce((acc,n)=> acc + n,0);
    const average = Number((sum / transformedArray.length).toFixed(2));




  
  
  
    return {
        transformedArray: transformedArray,
        sum: sum,
        average: average
    };
}
