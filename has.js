function symmetricDifference(arr1, arr2) {
  // Write your code here
  const my_set1 = new Set(arr1);
  const my_set2 = new Set(arr2);
  const output = [];

  my_set1.forEach(n => {
    if (!my_set2.has(n)){
        output.push(n);
    }
  })
  my_set2.forEach(n => {
    if (!my_set1.has(n)){
        output.push(n);
    }
  })
  return output;
}
