function efficientSymmetricDifference(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const symDiff = new Set();
    // Write your code here
    set1.forEach((n)=>{
        if (!set2.has(n)){
            symDiff.add(n);
        }
    })
    set2.forEach((n)=>{
        if (!set1.has(n)){
            symDiff.add(n);
        }
    })



    return Array.from(symDiff);

}
