function stackMatrices(matrixList) {
  // TODO: Merge all 2D arrays in 'matrixList' vertically into one 2D array
  let new_matrix = []

  for (let i = 0; i < matrixList.length; i++){
    for (let j = 0; j < matrixList[i].length;j++){
        new_matrix.push(matrixList[i][j]);

    }
    
  }
  return new_matrix;
}
// Do not write anything outside function