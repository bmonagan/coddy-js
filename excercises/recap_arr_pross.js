function processArray(arr) {
  arr.pop();
  arr.push(10);
  arr.sort();
  if (arr.includes(5)){
    let index = arr.indexOf(5);
    arr[index] = 50;
  }
  arr.reverse();
  return arr;
  }