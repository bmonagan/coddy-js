function countAllStrings(arr3D) {
  // TODO: Calculate the total number of string elements in the 3D array
    let elements = 0;
    for (let i = 0; i < arr3D.length;i++){
        for (let j = 0; j < arr3D[i].length; j++){
            for (let k =0; k < arr3D[i][j].length; k++){
                elements++;
            }
        }
    }
    return elements;
}
// Do not write anything outside function