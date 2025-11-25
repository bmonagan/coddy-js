function setDifference(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const differenceSet = new Set();
    // Write your code here
    set1.forEach((num)=>{
        if (!set2.has(num)){
            differenceSet.add(num);
        }
    })
    
    
    return Array.from(differenceSet);
}
