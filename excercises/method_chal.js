function findMostFrequentItem(inventory) {
  // Write your code here
  let maxq = 0;
  let maxitem = '';
  const inv = Object.entries(inventory);
  for (let [k,v] of inv){
    if (v > maxq){
        maxq = v;
        maxitem = k;
            }
  }
  return maxitem;
  
}
// Do not write anything outside function