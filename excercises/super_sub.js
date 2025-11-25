function subset(a,b){
    return [...a].every(element => b.has(element));
}
function superset(setA, setB) {
  return subset(setB, setA);
}
function analyzeSetRelations(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    // Write your code here
    let isSubset = subset(set1,set2);
    let isSuperset = superset(set1,set2);
    let isEqual = (set1.size === set2.size && subset(set1,set2));


    return {
        isSubset: isSubset,
        isSuperset: isSuperset,
        isEqual: isEqual
    };
}

