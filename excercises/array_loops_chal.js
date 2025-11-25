function findMaxInRows(matrix) {
  // Your code here
  let result = [];

  for (let i = 0; i < matrix.length; i++){
    let current_max = 0;
    for (let j = 0; j < matrix[0].length; j++){
        if (matrix[i][j] > current_max){
            current_max = matrix[i][j];
        }
    }
    result.push(current_max);
  }
  return result;
}

// Do not modify below this line