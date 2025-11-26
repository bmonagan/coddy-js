function mergeArr(arr1, arr2) {
  // Write your code here
  const merge = new Set([...arr1,...arr2]);
  return Array.from(merge);
}
