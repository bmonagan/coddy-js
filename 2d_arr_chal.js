function getElementsInRow(grid, rowIndex) {
  // TODO: Return an array with all elements in the specified row
  // If rowIndex is out of bounds, return an empty array
  if (rowIndex > grid.length){
    return [];
  } else{
    return grid[rowIndex];
    
  }
}
// Do not write anything outside the function