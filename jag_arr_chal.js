function flattenJagged(jaggedArray) {
  // Your code here
  let flat_arr = [];

  for (let i= 0; i < jaggedArray.length;i++){
    for (let j = 0; j < jaggedArray[i].length; j++){{
        flat_arr.push(jaggedArray[i][j])
    }
  }
  
}
    return flat_arr;}
// Do not write anything outside function