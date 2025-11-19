function combineMatrices(matrixA, matrixB, op) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let r = 0; r < rows; r++) {
    const rowArr = [];
    for (let c = 0; c < cols; c++) {
      if (op === '+') {
        rowArr.push(matrixA[r][c] + matrixB[r][c]);
      } else {
        rowArr.push(matrixA[r][c] - matrixB[r][c]);
      }
    }
    result.push(rowArr);
  }

  return result;
}