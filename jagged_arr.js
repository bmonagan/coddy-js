function sumJagged(jaggedArray) {
  // TODO: Implement logic to sum all elements of the jagged array.'
  let total = 0;

  for (let i = 0; i < jaggedArray.length; i++){
    for (let j = 0; j < jaggedArray[i].length;j++){
        total += jaggedArray[i][j];
    }
  }
  return total;
}
// Do not write anything outside function