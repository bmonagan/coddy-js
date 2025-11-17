function getColumn(matrix, numberOfRows, colIndex) {
  // TODO: Return an array containing elements from the specified column index
  let res = [];
  for (let i = 0; i<numberOfRows; i++){
    res.push(matrix[i][colIndex]);
    
  }
return res;
}
// Do not write anything outside function