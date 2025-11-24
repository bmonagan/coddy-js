function setOperations(inputArr) {
  const inputSet = new Set(inputArr);
  // Write your code here
  const copiedSet = new Set(inputSet);
  copiedSet.add(10);
  inputSet.clear();
  
  
  
  return {
    copiedSet: copiedSet,
    originalSet: inputSet
  };
}
