function findSumPatterns(matrix) {
  let main_diag = 0;
  let anti_diag = 0;
  let border = 0;
  
  // Calculate main diagonal sum
  for (let i=0;i < matrix.length;i++){
    for (let j = 0; j <matrix[0].length;j++){
        if (i==j){
            main_diag += matrix[i][j];
        }
        if (i + j == matrix.length - 1){
            anti_diag += matrix[i][j];
        }
        if (i == 0 || j == 0 || i == matrix.length -1  || j == matrix[0].length- 1){
            border += matrix[i][j];
        }
    }
  }
  console.log(`Main diagonal sum: ${main_diag}`);
  console.log(`Anti-diagonal sum: ${anti_diag}`);
  console.log(`Border sum: ${border}`);
}
