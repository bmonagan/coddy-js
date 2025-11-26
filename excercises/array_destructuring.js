function analyzeArray(arr) {
  // Write your code here
  const [first = null,second = null,...rest] = arr;
  const last = rest.pop() || null;

  return{
    first,
    second,
    last,
    restLength: rest.length
  }
}
