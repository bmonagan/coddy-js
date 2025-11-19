function find3DElement(array3D, x, y, z) {
  // Write your code here
  if (array3D?.[x]?.[y]?.[z]){
    return array3D[x][y][z];
  } 
  else{
    return "Invalid coordinates";
  }
  
}