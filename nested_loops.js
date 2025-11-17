function countOccurrences(matrix, target) {
  // TODO: Implement logic to count how many times 'target' appears in matrix
  let result = 0;

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
        if (matrix[i][j] === target){
            result += 1;

        }}}
    return result
}
// Do not write anything outside function