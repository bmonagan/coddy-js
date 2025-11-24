function setUnion(arr1, arr2) {
     const set1 = new Set(arr1)
     const set2 = new Set(arr2)
     // Write your code here
     const unionSet = union(set1,set2);
     return Array.from(unionSet);
}
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}