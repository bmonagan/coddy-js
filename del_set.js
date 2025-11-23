function removeMultiples(arr, n) {
  // Write your code here
  const my_set = new Set(arr);

  my_set.forEach(num => {
    if (num % n === 0){
        my_set.delete(num);
    }
  })
  return Array.from(my_set);
}
