function mirrorRows(matrix) {
  // TODO: Return a new 2D array where each row is reversed.
  let nmatrix = [];
  for (let i = 0; i < matrix.length; i++){
    let row = [];
    for (let j = 0; j < matrix[i].length;j++){
        row.unshift(matrix[i][j]);
    }
    nmatrix.push(row);
}
return nmatrix;
}
// Do not write anything outside function