function printPatterns(matrix) {
    let mainDiagonal = []
    // TODO: Implement
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j <matrix[0].length; j++){
            if (i==j){
                mainDiagonal.push(matrix[i][j]);
            }
        }
    }
    console.log("Main Diagonal:", mainDiagonal.join(" "));
    
    let antiDiagonal = [];
    // TODO: Implement
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j <matrix[0].length; j++){
            if (i+j == matrix.length -1 ){
                antiDiagonal.push(matrix[i][j]);
            }
        }
    }
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    let topBorder = [];
    topBorder = matrix[0]
    // TODO: Implement
    console.log("Top Border:", topBorder.join(" "));
    
    let bottomBorder = [];
    bottomBorder = matrix[matrix.length -1]
    // TODO: Implement
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    let leftBorder = [];
    // TODO: Implement
     for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j <matrix[0].length; j++){
            if (j == 0){
                leftBorder.push(matrix[i][j]);
            }
        }
    }
    console.log("Left Border:", leftBorder.join(" "));
    
    let rightBorder = [];
    // TODO: Implement
     for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j <matrix[0].length; j++){
            if (j == matrix[0].length - 1){
                rightBorder.push(matrix[i][j]);
            }
        }
    }
    console.log("Right Border:", rightBorder.join(" "));
}
// Do not write anything outside function